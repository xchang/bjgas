class ProcessController < ApplicationController
  def index
  	@active_submenu = params['submenu'] || 'kaihu'
  end
end
