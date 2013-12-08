class SessionsController < ApplicationController
  def create
    if !User.where(email: create_params['email'], password: create_params['password']).exists?
      raise AppExceptions::LoginFailedError.new(create_params['email'])
    end
    set_current_user User.where(email: create_params['email'], password: create_params['password']).first
    render json: {}, status: :created
  end

  def destroy
    remove_current_user
    render json: {}, status: :ok
  end

private
  def create_params
    params.permit(:email, :password)
  end
end