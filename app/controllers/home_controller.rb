class HomeController < ApplicationController
  def index
    @active_menu = "home"
    @news_list = News.all
  end
end

