module AppExceptions
  class ValidationError < StandardError
    attr_reader :messages
    def initialize error_messages
      @messages = error_messages
    end
  end
end