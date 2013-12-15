class SafetyController < ApplicationController
  def index
  	@active_submenu = params['submenu'] || 'gas'
  end
end
