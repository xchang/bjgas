class IntroductionController < ApplicationController

  def index
    @active_submenu = params['submenu'] || 'summary'
  end

end
