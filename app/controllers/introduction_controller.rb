class IntroductionController < ApplicationController

  def index
    @active_submenu = params['submenu'] || 'summary'
    @active_menu = "intro"
  end

end
