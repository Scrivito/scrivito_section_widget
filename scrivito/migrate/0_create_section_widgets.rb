class CreateSectionWidgets < ::Scrivito::Migration
  def up
    Scrivito::ObjClass.create(
      name: 'SectionContentWidget',
      type: 'publication',
      is_binary: false,
      title: 'Section Content Widget',
      attributes: [
        {name: "section_content", type: "widget"},
        {name: "background_color", type: "string"}
      ]
    )

    Scrivito::ObjClass.create(
      name: 'SectionParallaxWidget',
      type: 'publication',
      is_binary: false,
      title: 'Section Content Widget',
      attributes: [
        {name: "section_content", type: "widget"},
        {name: "background_image", type: "reference"},
        {name: "height", type: "string"}
      ]
    )

    Scrivito::ObjClass.create(
      name: 'SectionVideoWidget',
      type: 'publication',
      is_binary: false,
      title: 'Section Content Widget',
      attributes: [
        {name: "section_content", type: "widget"},
        {name: "background_video_mp4", type: "reference"},
        {name: "background_video_webm", type: "reference"},
        {name: "background_video_ogg", type: "reference"},
        {name: "background_image", type: "reference"},
        {name: "height", type: "reference"},
      ]
    )

    if Scrivito::ObjClass.all.to_a.select {|a| a.name == "Video"}.empty?
      Scrivito::ObjClass.create(
        name: 'Video',
        type: 'generic',
        is_binary: true,
        title: 'Video',
        attributes: []
      )
    end

  end
end
