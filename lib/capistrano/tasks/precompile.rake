# lib/capistrano/tasks/precompile.rake

# also you need to uncomment next line in Capfile
# require 'capistrano/rails/assets'

namespace :assets do
  desc 'Precompile assets locally and then rsync to web servers'
  # Rake::Task['deploy:assets:precompile'].clear_actions

  task :precompile do
    run_locally do
      with rails_env: 'production' do
        # execute 'RAILS_ENV=production bin/rake assets:precompile'
        execute :bundle, 'exec rake assets:precompile'
        # execute 'gzip -9kvr ./public/'
        # execute 'yarn install --check-files'
      end
    end

    on roles(:web), in: :parallel do |server|
      run_locally do
        execute :rsync,
          "-a --delete --progress ./public/packs/ #{fetch(:user)}@#{server.hostname}:#{shared_path}/public/packs/"
        # execute :rsync,
        #   "-a --delete ./public/assets/ #{fetch(:user)}@#{server.hostname}:#{shared_path}/public/assets/"
      end
    end

    run_locally do
      # execute :rm, '-rf public/assets'
      execute :rm, '-rf public/packs'
    end
  end
end
