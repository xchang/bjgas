BjgasRepo::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  match '/intro', to: 'introduction#index', via: :get
  match '/intro/:submenu', :controller => 'introduction', :action => 'index', via: :get

  match '/safety', to: 'safety#index', via: :get
  match '/safety/:submenu', :controller => 'safety', :action => 'index', via: :get
  
  match '/deliver', to: 'deliver#index', via: :get
  match '/deliver/:submenu', :controller => 'deliver', :action => 'index', via: :get

  get 'process' => 'process#index'
  get 'branch' => 'branch#index'

  resources :orders

  resources :news, :except => :show

  resources :users

  resources :sessions do
    delete 'logout' => 'sessions#destroy', on: :collection
  end

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
