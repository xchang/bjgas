module ApplicationHelper

  def submenu_class submenu
    @active_submenu == submenu ? "active" : ""
  end

end
