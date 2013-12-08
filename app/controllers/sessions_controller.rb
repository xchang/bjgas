class SessionsController < ApplicationController
  def create
    user = User.find(email: => create_params['email'], password: => create_params['password'])
    render nothing: true, status: :created
  end

private
  def create_params
    params.permit(:email, :password)
  end
end