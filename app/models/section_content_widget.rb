class SectionContentWidget < Widget
  attribute :section_content, :widgetlist
  attribute :background_color, :string
  attribute :padding_size, :enum, values: ['none', 'small', 'medium', 'large'], default: 'medium'

  def selectable_color_classes
    if Obj.respond_to?('selectable_color_classes')
      Obj.selectable_color_classes('section_content_widget', 'background_color')
    else
      SectionContentWidget.fallback_colors
    end
  end

  private
  def self.fallback_colors
    %w(transparent black gray light-gray red green blue yellow)
  end
end
