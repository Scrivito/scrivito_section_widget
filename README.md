# ScrivitoSectionWidgets

Add some Scrivito widgets to your app to seperate the content in vertical parts.
This gem will add widgets for sections, header videos and a parallax effects to your app.

## Installation

Add the gem to your gemfile

    gem 'scrivito_section_widgets'

Add styles to your styles manifest

    *= require scrivito_section_widgets

Add scripts to your script manifest

    //= require scrivito_section_widgets

## Section over full width of your page

Using bootstrap 3? Nothing todo.

Using different Stylesheets you will have a dom element where the page ist contained. This Container have to define `width: 100%`
The Widget adds a new dom element section. The class .container defines your width of the page.

For Example:

```css
.section { // this comes from your css or css-framework
  width: 100%;
  padding: 0;
  margin: 0;
}

section .container { // this is the style for the widget
  width: 1170px; // change for your main width if needed
  padding: 15px 0;
  margin: 0 auto; // to center your content
}
```
## Using video

If your App defines a class Video, you have to check if it defines the blob attribute as a binary.
You can delete the class in your app if nothing more is defined by your class.

```ruby
class Video < Obj
  attribute :blob, :binary
  ...
end
```

## More

We reommend to set the valid widget class method in your `obj.rb`. So you can define, that sections can only be created as top level content.

```ruby
def valid_widget_classes_for(field_name)
  if field_name == "body" # this is your main content field
    Obj.section_widgets
  else
    Scrivito.models.widgets.to_a - Obj.section_widgets
  end
end

def self.section_widgets
  [SectionContentWidget, SectionVideoWidget, ElasticSliderWidget, GoogleMapsWidget]
end
```
