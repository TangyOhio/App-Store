class Api::AppsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: App.all
  end

  def show
    render json: App.find(params[:id])
  end
end
