class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.friendly.find(params[:id])
    @title = @post.title
    @image = @post.image
  end

  def new
    @post = Post.new
  end

  def create
    post = Post.create!(post_params)
    redirect_to post
  end

  def edit
    @post = Post.friendly.find(params[:id])
  end

  def update
    post = Post.friendly.find(params[:id])
    post.update(post_params)
    redirect_to post
  end




  private

  def post_params
    params.require(:post).permit(:title, :body, :short_description, :image, :slug)
  end

  def admin
    unless current_user && current_user.admin?
      flash[:danger] = "How dare you use your guile tactics on us!"
      redirect_to '/posts'
    end
  end

end
