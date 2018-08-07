# notification

- Download and test it for free

### how to use on rails


* ApplicationHelper
```
def flash_message
    notification = ''
    [:success, :info, :warning, :error].each do |type|
      if flash[type]
        notification += "<script>notification('#{type}', '#{flash[type]}');</script>"
      end
    end
    notification.html_safe
end
```

* Application.html.erb
```
<div class="notification">
  <%= flash_message %>
</div> 
```

* call it on controller
```
flash[:type] = 'Text your text here'
```
> change the type for: succes, error, warning or info.
