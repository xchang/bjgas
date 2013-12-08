class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  layout "application"

  rescue_from AppExceptions::ValidationError do |errors|
    render json: {:errors => errors.messages}, status: :bad_request
  end

  rescue_from AppExceptions::LoginFailedError do |errors|
    render json: {:email => errors.email}, status: :bad_request
  end

  def current_user
    session[:current_user]
  end

  def set_current_user user
    session[:current_user] = user
  end

  def remove_current_user
    session.delete :current_user
  end
end