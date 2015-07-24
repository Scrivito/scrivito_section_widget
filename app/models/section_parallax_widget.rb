class SectionParallaxWidget < Widget
  attribute :section_content, :widgetlist
  attribute :background_image, :reference
  attribute :height, :string
  attribute :speed, :enum, values: ["fixed", "slow", "medium", "fast", "deactivate"], default: "medium"
end