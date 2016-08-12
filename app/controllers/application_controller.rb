require './config/environment'
require './app/models/score'
# require 'pry'

class ApplicationController < Sinatra::Base
    
    $existing = ""
    $name = ""
    
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
        $name = params[:name]
        $existing = Score.order(score_num: :desc).find_by(ip: params[:ip])
        
        if $existing.nil? || params[:score_num].to_i > $existing.score_num
            @score = Score.create(:name => params[:name], :score_num => params[:score_num], :date => params[:date], :ip => params[:ip])
            
            # remove previous score
            if !$existing.nil?
                Score.delete($existing.id)
            end
            
            $existing = nil
        else
            $existing = "Sorry, this is lower than your highest score."
        end
        
        redirect '/'
    end
end