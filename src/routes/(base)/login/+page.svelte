
    <script>
        	import * as m from '$m'
            import Icon from '@iconify/svelte';
    </script>
    
    <section class="min-h-[87vh] flex items-stretch text-white ">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-start tracking-wide">{m.bayader_aljazirah()}</h1>
                <p class="text-7xl my-4">You THINK it... <br/> We PRINT it.</p>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                <a href="/">
                    <Icon icon="mdi:twitter" class="text-5xl" ></Icon>
                </a>
                <a href="/">
                    <Icon icon="mdi:facebook" class="text-5xl"></Icon>
                </a>
                <a href="/">
                    <Icon icon="mdi:instagram" class="text-5xl"></Icon>
                </a>
            </div>
        </div>
        <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-base-100" >
            <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
                <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div class="w-full py-6 z-20">

                <form method="POST" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div class="pb-2 pt-4">
                        <label class="form-control w-full ">
                            <div class="label">
                              <span class="label-text text-xl">Email</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2 text-base-content input-lg input-primary">
                                <Icon icon="bxs:user" ></Icon>
                                <input type="email" name="email" class="grow" placeholder="example@example.com" />
    
                            </label>

                          </label>

                    </div>
                    <div class="pb-2 pt-4">
                        <label class="form-control w-full ">
                            <div class="label">
                              <span class="label-text text-xl">Password</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2 text-base-content input-lg input-primary">
                                <Icon icon="material-symbols:lock" ></Icon>
                                <input type="password" name="password" class="grow" placeholder="Password" />
    
                            </label>

                          </label>
                    </div>
                    <div class="text-warning text-right">
                        <a href="/">Forgot your password?</a>
                    </div>
                    <div class="px-4 pb-2 pt-4">
                        <button class="uppercase btn btn-primary w-full">sign in</button>
                    </div>

                    <p class="pt-12 text-base-content">You dont have account? <a href="/register" class="btn btn-secondary">Register</a></p>

                    <div class="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                        <a href="/">
                            <Icon icon="mdi:twitter" class="text-5xl" ></Icon>
                        </a>
                        <a href="/">
                            <Icon icon="mdi:facebook" class="text-5xl"></Icon>
                        </a>
                        <a href="/">
                            <Icon icon="mdi:instagram" class="text-5xl"></Icon>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </section>
