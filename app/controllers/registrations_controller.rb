class RegistrationsController < Devise::RegistrationsController
    def after_sign_up_path_for(resource)
        'user/nom-du-user'
    end

    def after_inactive_sign_up_path_for
        '/an/example/path'
    end
end
