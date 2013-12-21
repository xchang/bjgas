class SafetyController < ApplicationController
  def index
  	@active_submenu = params['submenu'] || 'gas'
  	@active_menu = "safety"
  end
end
