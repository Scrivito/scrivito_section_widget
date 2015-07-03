# ScrivitoSectionWidgets

Add some widgets to your app to seperate the content in vertical parts.
This gem will add a Section, Headervideo and a Parallax effect to your app.

## Installation

Add the gem to your gemfile

    gem 'scrivito_section_widgets'

Add styles to your styles manifest

    *= require scrivito_section_widgets

Add scripts to your script manifest

    //= require scrivito_section_widgets

## Customization

By default the following colors are avaiable:
transparent black gray light-gray red green blue yellow

If you which to change the selection than add the class method `selectable_color_classes` to your obj.rb. The parameters obj_class_name and field_name can be used to restrict the selection for given widgets and/or fields.

    def self.selectable_color_classes(obj_class_name, field_name)
      return ["red","green","blue"]
    end

You have to define the styles for your classes.

```css
.red {
  background: red;
}

.green {
  background: green;
}

.blue {
  background: blue;
  color: white;
}
```

## Section over full width of your page

Using Bootstrap 3? Nothing todo.

Using different Stylesheets you will have a dom element where the page ist contained. This Container have to define a width of 100%.
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

If your App defines a class Video, you have to check if it defines the blob attribute.
You can delete the class in your app if nothing more is defined by the class.

```ruby
class Video < Obj
  attribute :blob, :binary

  # ... Your Code
end
```