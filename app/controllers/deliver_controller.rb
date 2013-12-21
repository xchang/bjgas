class DeliverController < ApplicationController
  def index
  	@active_submenu = params['submenu'] || 'team'
  end
end
