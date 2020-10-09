# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


5.times do Post.create(title: "Hello World Is the Best Programming Start",
                       short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis dapibus ipsum in congue. Nulla volutpat pellentesque tortor, quis mattis odio imperdiet sit amet. Praesent vel ornare justo. Mauris dignissim dui sit amet maximus elementum. Nunc viverra purus sed ante dictum, in interdum mauris aliquam. Ut ultrices orci sed est tristique laoreet. Maecenas a viverra ante. Vivamus odio est, pharetra quis vulputate sit amet, posuere ut diam. Vivamus nec est nulla. Cras suscipit arcu id orci laoreet sollicitudin.",
                       slug: "hello-world-best-programming",
                       body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor posuere diam a ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vulputate orci nec massa dictum hendrerit. Fusce consectetur elit enim, aliquam accumsan lacus ornare sit amet. Praesent aliquam tristique ultrices. Duis nec eros suscipit, aliquam nibh ac, varius dolor. Proin sed euismod felis. Nullam eleifend ipsum vitae risus consectetur, quis congue magna iaculis. Ut vel luctus tellus. Curabitur in dolor finibus, eleifend diam a, interdum elit.

Sed a urna consectetur, pretium lectus non, egestas lectus. Donec tempus purus finibus commodo cursus. Vivamus a neque luctus, luctus elit non, vehicula nisl. Pellentesque cursus et lorem ac vulputate. Aliquam erat volutpat. Aliquam nec justo sem. Nam vitae fringilla nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pharetra metus in condimentum dapibus. Fusce dapibus ligula dui, non ultrices justo porta in. Phasellus sed lectus sit amet elit varius ultrices. Ut vitae diam velit. Praesent non mollis justo. Duis condimentum facilisis sem sed scelerisque. Ut ac leo vulputate, porta augue non, consequat nisi. Integer consectetur, arcu at dictum rutrum, diam eros blandit justo, vel pulvinar nulla augue non eros.

Maecenas tempus massa ut velit ullamcorper efficitur. Vivamus facilisis volutpat finibus. Duis ac mi mi. Quisque consequat eros quis velit luctus, nec scelerisque sem lacinia. Ut mollis non neque et faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pharetra nisl quis tellus tincidunt feugiat. Vivamus nunc nulla, rhoncus ut est et, gravida eleifend risus.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum sodales velit et tempor. Etiam ac ultrices quam, vel faucibus ante. Cras vitae nulla tempor, gravida turpis ac, posuere risus. Fusce porttitor efficitur elit non venenatis. Pellentesque consequat imperdiet ipsum, ut bibendum tellus auctor id. Fusce accumsan nisi ex, sed suscipit felis consectetur sed. Aenean imperdiet eros eget imperdiet malesuada.

Maecenas dictum vel risus dapibus tincidunt. Suspendisse a posuere felis, sit amet sodales justo. Nulla luctus, nisi sed aliquet euismod, tortor leo sollicitudin dui, quis imperdiet libero enim quis augue. Duis velit elit, consequat eu gravida eget, mattis accumsan nibh. Vestibulum consequat iaculis tortor, sed vulputate risus scelerisque quis. Donec sit amet purus non metus pulvinar dapibus. Vivamus egestas leo ac tempus tincidunt. Maecenas sollicitudin mi bibendum sapien egestas suscipit.")
end
