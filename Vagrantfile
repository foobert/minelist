ENV["VAGRANT_DEFAULT_PROVIDER"] = "docker"

Vagrant.configure("2") do |config|
    config.vm.provider "docker" do |d|
        d.build_dir = "."
        d.ports = ["3000:3000"]
    end
    config.vm.network "forwarded_port", guest: 3000, host: 3000
end

# vi:ft=ruby
