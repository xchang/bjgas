module AppExceptions
  class ValidationError < StandardError
    attr_reader :messages
    def initialize error_messages
      @messages = Array.new
      error_messages.keys.each { |k|
        err = Hash.new
        err[:field] = k
        err[:error] = error_messages[k][0]
        @messages.push err
      }
    end
  end

  class LoginFailedError < StandardError
    attr_reader :email
    def initialize email
      @email = email
    end
  end
end