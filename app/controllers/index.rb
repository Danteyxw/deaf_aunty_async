get '/' do
  @aunty = params[:aunty]
  puts @aunty
  # Look in app/views/index.erb
  erb :index
end

post '/aunty' do
  speech = params[:user_input]
  puts "default ran"
  redirect to("/return/#{speech}")
end


get '/return/:aunty' do
  @aunty = params[:aunty]

  content_type :json

  if @aunty == @aunty.upcase
    @return = "i can hear"
  else
    @return = "CANT HEAR YOU"
  end
  @return.to_json
end