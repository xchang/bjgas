class DeliverController < ApplicationController
  
  def index
  	@active_submenu = params['submenu'] || 'team'
    @active_menu = 'deliver'
  end
end
