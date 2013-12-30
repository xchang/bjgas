class NewsController < ApplicationController

  def index
    load_news
  end

  def new
  end

  def create
    news = News.new create_params
    raise AppExceptions::ValidationError.new(news.errors.messages) unless news.valid?
    news.save
    load_news
    render 'index'
  end

  def destroy
    render 'index'
  end

  def edit
    render 'index'
  end

  private
  def create_params
    params.permit(:content)
  end

  def load_news
    @news_list = News.all
  end
end