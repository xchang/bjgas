class HomeController < ApplicationController
  def index
    p "current user #{current_user}"
  end
end

