class UsersController < ApplicationController
  def create
    user = User.new create_params
    raise AppExceptions::ValidationError.new(user.errors.messages) unless user.valid?
    user.save
    render nothing: true, status: :created
  end

private
  def create_params
    params.permit(:email, :password, :password_confirmation)
  end
end