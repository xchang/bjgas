module ApplicationHelper
  def submenu_class submenu
    @active_submenu == submenu ? "current" : ""
  end

  def menu_class menu
    @active_menu == menu ? "current" : ""
  end

  def to_full_time date
    date.strftime '%Y-%m-%d %H:%M'
  end

end
