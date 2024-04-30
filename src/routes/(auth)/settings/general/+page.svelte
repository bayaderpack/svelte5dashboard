<script>
	import Map from "$lib/components/Map.svelte"
import TabItem from "$lib/components/tab/TabItem.svelte"


	import Tabs from "$lib/components/tab/Tabs.svelte"

</script>
<Tabs>
    <TabItem open title="Generals">
        <div class="flex flex-cols md:flex-rows">
            <div class="flex flex-col w-full font-b">
                <h3>Store info</h3>
                <Map />
            </div>
            <div class="flex flex-col w-full ">
                <h3 class="font-bold">Social media</h3>
                <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">Facebook</span>
                    </div>
                    <input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
                  </label>
                  <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">Twitter</span>
                    </div>
                    <input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
                  </label>
                  <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">Instagram</span>
                    </div>
                    <input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
                  </label>
                  <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">Snapchat</span>
                    </div>
                    <input type="text" placeholder="bayaderpack" class="input input-bordered w-full" />
                  </label>
                  <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">Whatsapp</span>
                    </div>
                    <input type="text" placeholder="966501231231" class="input input-bordered w-full" />
                  </label>
                  <div class="divider"></div>
                  <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">Google maps API key</span>
                    </div>
                    <input type="text" placeholder="AIzaSyCU1EAaBkMwU4Z11LE1SGYZMa_1DBNvzDo" class="input input-bordered w-full" />
                  </label>
                  <div class="form-control w-full">
                    <label class="label cursor-pointer">
                      <span class="label-text">Maintainance mode</span> 
                      <input type="checkbox" class="toggle toggle-primary" />
                    </label>
                  </div>
            </div>
        </div>
    </TabItem>
    <TabItem title="Store">

        <div class="flex flex-col items-center">

            <div class="flex flex-col md:flex-row gap-8 w-full">
                <div class="form-control w-full">
                    <label class="label cursor-pointer">
                      <span class="label-text">Show product price with tax</span> 
                      <input type="checkbox" class="toggle toggle-primary" checked />
                    </label>
                  </div>
                  <div class="form-control w-full">
                    <label class="label cursor-pointer">
                      <span class="label-text">Activate Points System</span> 
                      <input type="checkbox" class="toggle toggle-primary" checked />
                    </label>
                  </div>
            </div>
            <div class="flex flex-col md:flex-row gap-8 w-full">
        <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Price decimal scale</span>
            </div>
            <input type="number" placeholder="2" class="input input-bordered w-full" />
          </label>

        </div>




    </div>
    </TabItem>
    <TabItem title="Emails">
        <div class="flex flex-col items-center">
            <h3 class="font-black">This is important to be able to send/recieve emails to/from customers, if you are not sure about it, contact the Admin</h3>
            <div class="divider"></div>
            <div class="flex flex-col md:flex-row gap-8 w-full">
        <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Host</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Port</span>
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </label>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-full">
            <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">Sender email</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">Sender email password</span>
                </div>
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
              </label>
            </div>
            <div class="divider">Emails recieved for store request</div>
            <div class="flex flex-col md:flex-row gap-8 w-full">
                <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">Main email</span>
                    </div>
                    <input type="email" placeholder="example@example.com" class="input input-bordered w-full" />
                  </label>
                  <label class="form-control w-full">
                    <div class="label">
                      <span class="label-text">CC</span>
                    </div>
                    <input type="email" placeholder="example@example.com" class="input input-bordered w-full" />
                  </label>
                </div>
                <div class="divider">Emails of contact form</div>
                <div class="flex flex-col md:flex-row gap-8 w-full">
                    <label class="form-control w-full">
                        <div class="label">
                          <span class="label-text">Main Email</span>
                        </div>
                        <input type="email" placeholder="example@example.com" class="input input-bordered w-full" />
                      </label>
                      <label class="form-control w-full">
                        <div class="label">
                          <span class="label-text">CC</span>
                        </div>
                        <input type="email" placeholder="example@example.com" class="input input-bordered w-full" />
                      </label>
                    </div>
                    <div class="divider">Email of quotation orders</div>
                    <div class="flex flex-col md:flex-row gap-8 w-full">
                        <label class="form-control w-full">
                            <div class="label">
                              <span class="label-text">Main Email</span>
                            </div>
                            <input type="email" placeholder="example@example.com" class="input input-bordered w-full" />
                          </label>
                          <label class="form-control w-full">
                            <div class="label">
                              <span class="label-text">CC</span>
                            </div>
                            <input type="email" placeholder="example@example.com" class="input input-bordered w-full" />
                          </label>
                        </div>
    </div>
      </TabItem>
  </Tabs>