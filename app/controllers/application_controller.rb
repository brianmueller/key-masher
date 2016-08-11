require './config/environment'
require './app/models/score'
require 'pry'

class ApplicationController < Sinatra::Base
    
    configure do
        set :public_folder, 'public'
        set :views, 'app/views'
    end
    
    get '/' do
        @scores = Score.all
        erb :index
    end
    
    post '/score' do
        puts params
        @score = Score.create(:name => params[:name], :score_num => params[:score_num], :date => params[:date])
        redirect '/'
    end
    
end