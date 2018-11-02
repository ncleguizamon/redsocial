class PostChannel < ApplicationCable::Channel
  def subscribed 
    # stream_from "some_channel"
    stream_from "posts"
  end

  def say_hi
     puts "\n\n\n\n  Hola Camilo soy tu servidor \n\n\n\n\n\n\n\n "
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
