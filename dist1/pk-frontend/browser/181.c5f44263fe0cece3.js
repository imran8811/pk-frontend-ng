"use strict";(self.webpackChunkpk_frontend=self.webpackChunkpk_frontend||[]).push([[181],{1181:(Y,C,l)=>{l.r(C),l.d(C,{AdminModule:()=>h});var T=l(6895),k=l(529),e=l(433),m=l(646),t=l(1571),f=l(4653);class p{constructor(r,o){this.adminAuthService=r,this.router=o}canActivate(r,o){return!0===this.adminAuthService.isLoggedIn()||(this.router.navigate(["/admin/login"]),!1)}}p.\u0275fac=function(r){return new(r||p)(t.LFG(f.Yb),t.LFG(m.F0))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var y=l(8563);class g{constructor(r,o,n){this.fb=r,this.router=o,this.adminAuthService=n,this.adminLoginForm=this.fb.group({email:["",e.kI.required],password:["",e.kI.required]}),this.onSubmit=()=>{this.adminAuthService.adminLogin({email:this.form.email.value,password:this.form.password.value}).subscribe(u=>{"success"===u.type&&(localStorage.setItem("userData",JSON.stringify({token:u.token,name:u.user.name})),this.router.navigate(["/admin/add-product"]))})},this.adminLogout=()=>{this.adminAuthService.adminLogout().subscribe(s=>{"success"===s.type&&(localStorage.removeItem("userData"),this.router.navigate(["/admin/login"]))})}}get form(){return this.adminLoginForm.controls}ngOnInit(){}}function F(i,r){1&i&&(t.TgZ(0,"p",56),t._uU(1,"Image Uploaded Successfully"),t.qZA())}function I(i,r){1&i&&(t.TgZ(0,"p",57),t._uU(1,"Image Uploading Error"),t.qZA())}g.\u0275fac=function(r){return new(r||g)(t.Y36(e.qu),t.Y36(m.F0),t.Y36(f.Yb))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-admin-header"]],decls:19,vars:0,consts:[[1,"col-lg-12"],[1,"row"],[1,"navbar","navbar-expand-lg","navbar-light","bg-light","justify-content-between"],["routerLink","/",1,"navbar-brand"],["src","/assets/images/logo.jpg","alt","logo","width","{227}","height","{71}","title","PK Apparel Home"],["type","button","data-toggle","collapse","data-target","#navbarNavAltMarkup","aria-controls","navbarNavAltMarkup","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavAltMarkup",1,"collapse","navbar-collapse"],[1,"navbar-nav"],["routerLink","/admin/add-product",1,"nav-item","nav-link"],["routerLink","/admin/products",1,"nav-item","nav-link"],["routerLink","/admin/create-admin-user",1,"nav-item","nav-link"],["routerLink","/admin/login",1,"nav-item","nav-link"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){1&r&&(t.TgZ(0,"header",0)(1,"div",1)(2,"nav",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"div",8)(9,"a",9),t._uU(10,"Add product"),t.qZA(),t.TgZ(11,"a",10),t._uU(12,"Products"),t.qZA(),t.TgZ(13,"a",11),t._uU(14,"Create User"),t.qZA(),t.TgZ(15,"a",12),t._uU(16,"Login"),t.qZA(),t.TgZ(17,"a",13),t.NdJ("click",function(){return o.adminLogout()}),t._uU(18,"Logout"),t.qZA()()()()()())},dependencies:[m.rH]});class _{get form(){return this.addProductForm.controls}constructor(r,o,n){this.fb=r,this.productService=o,this.router=n,this.imgFile="",this.imageUploadedSuccess=!1,this.imageUploadedError=!1,this.imageUploadForm=this.fb.group({article_no:["",e.kI.required],product_images:["",e.kI.required]}),this.addProductForm=this.fb.group({sizes:["",e.kI.required],colors:["",e.kI.required],fitting:["",e.kI.required],fabric:["",e.kI.required],fabric_weight:["",e.kI.required],wash_type:["",e.kI.required],moq:["",e.kI.required],price:["",e.kI.required],article_no:["",e.kI.required],category:["",e.kI.required],type:["",e.kI.required],length:["",e.kI.required],slug:["",e.kI.required]}),this.fileOnChange=a=>{if(a.target.files.length>0){this.imageUploadedSuccess=!1,this.imageUploadedError=!1;const s=new FormData,u=a.target.files;for(let c=0;c<u.length;c++)s.append(`product_images[${c}]`,u[c]);s.append("article_no",this.form.article_no.value),this.productService.productImageUpload(s).subscribe(c=>{console.log(c),"success"===c.type&&(this.imageUploadedSuccess=!0,this.imageUploadedError=!1)})}},this.onSubmit=()=>{const a={sizes:this.addProductForm.get("sizes").value,colors:this.addProductForm.get("colors").value,fitting:this.addProductForm.get("fitting").value,fabric:this.addProductForm.get("fabric").value,fabric_weight:this.addProductForm.get("fabric_weight").value,wash_type:this.addProductForm.get("wash_type").value,price:this.addProductForm.get("price").value,moq:this.addProductForm.get("moq").value,article_no:this.addProductForm.get("article_no").value,category:this.addProductForm.get("category").value,type:this.addProductForm.get("type").value,length:this.addProductForm.get("length").value,slug:this.addProductForm.get("slug").value};this.productService.addProduct(a).subscribe(s=>{"success"===s.type&&this.router.navigate(["/admin/products"])})}}ngOnInit(){}}_.\u0275fac=function(r){return new(r||_)(t.Y36(e.qu),t.Y36(f.M5),t.Y36(m.F0))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-add-product"]],decls:100,vars:3,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"col-lg-12","mt-5","mb-5"],[1,"row","justify-content-center"],[1,"text-center","mb-3"],[1,"row","mb-3"],[1,"col-4","mb-3"],["for","article-no"],["id","article-no","formControlName","article_no",1,"form-control"],[1,"col-lg-4"],["for","product-files"],["type","file","id","product-files","multiple","",1,"form-control",3,"change"],["class","text-success",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-4"],["for","category"],["formControlName","category",1,"form-control"],["value","men"],["value","women"],["value","boys"],["value","girls"],["for","type"],["formControlName","type",1,"form-control"],["value","jeans-pant"],["value","chino-pant"],["value","cargo-trouser"],["value","biker-jeans"],["for","length"],["formControlName","length",1,"form-control"],["value","long"],["value","short"],["for","product-slug"],["type","text","id","product-slug","formControlName","slug",1,"form-control"],["for","sizes"],["type","text","id","sizes","formControlName","sizes",1,"form-control"],["for","fitting"],["id","fitting","formControlName","fitting",1,"form-control"],["value","slim"],["value","straight"],["value","skinny"],["value","regular"],["value","ankle"],["for","fabric"],["type","text","id","fabric","formControlName","fabric",1,"form-control"],["for","fabric-weight"],["type","text","id","fabric-weight","formControlName","fabric_weight",1,"form-control"],["for","wash-type"],["type","text","id","wash-type","formControlName","wash_type",1,"form-control"],["for","moq"],["type","text","id","moq","formControlName","moq",1,"form-control"],["for","colors"],["type","text","id","colors","formControlName","colors",1,"form-control"],["for","price"],["type","text","id","price","formControlName","price",1,"form-control"],[1,"col-4","pt-4"],["type","submit",1,"btn","btn-primary","col-4"],[1,"text-success"],[1,"text-danger"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-admin-header"),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",2)(4,"div",3)(5,"h2",4),t._uU(6,"Add Product"),t.qZA(),t.TgZ(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Article No."),t.qZA(),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"div",9)(13,"label",10),t._uU(14,"Product Files"),t.qZA(),t.TgZ(15,"input",11),t.NdJ("change",function(a){return o.fileOnChange(a)}),t.qZA(),t.YNc(16,F,2,0,"p",12),t.YNc(17,I,2,0,"p",13),t.qZA(),t.TgZ(18,"div",14)(19,"label",15),t._uU(20,"Category"),t.qZA(),t.TgZ(21,"select",16)(22,"option",17),t._uU(23,"Men"),t.qZA(),t.TgZ(24,"option",18),t._uU(25,"Women"),t.qZA(),t.TgZ(26,"option",19),t._uU(27,"Boys"),t.qZA(),t.TgZ(28,"option",20),t._uU(29,"Girls"),t.qZA()()(),t.TgZ(30,"div",6)(31,"label",21),t._uU(32,"Product Type"),t.qZA(),t.TgZ(33,"select",22)(34,"option",23),t._uU(35,"Jeans Pant"),t.qZA(),t.TgZ(36,"option",24),t._uU(37,"Chino Pant"),t.qZA(),t.TgZ(38,"option",25),t._uU(39,"Cargo Trouser"),t.qZA(),t.TgZ(40,"option",26),t._uU(41,"Biker Jeans"),t.qZA()()(),t.TgZ(42,"div",14)(43,"label",27),t._uU(44,"Product Length"),t.qZA(),t.TgZ(45,"select",28)(46,"option",29),t._uU(47,"Long"),t.qZA(),t.TgZ(48,"option",30),t._uU(49,"Short"),t.qZA()()(),t.TgZ(50,"div",6)(51,"label",31),t._uU(52,"Product Slug"),t.qZA(),t._UZ(53,"input",32),t.qZA(),t.TgZ(54,"div",14)(55,"label",33),t._uU(56,"Sizes"),t.qZA(),t._UZ(57,"input",34),t.qZA(),t.TgZ(58,"div",6)(59,"label",35),t._uU(60,"Fitting"),t.qZA(),t.TgZ(61,"select",36)(62,"option",37),t._uU(63,"Slim"),t.qZA(),t.TgZ(64,"option",38),t._uU(65,"Straight"),t.qZA(),t.TgZ(66,"option",39),t._uU(67,"Skinny"),t.qZA(),t.TgZ(68,"option",40),t._uU(69,"Regular"),t.qZA(),t.TgZ(70,"option",41),t._uU(71,"Ankle"),t.qZA()()(),t.TgZ(72,"div",14)(73,"label",42),t._uU(74,"Fabric Content"),t.qZA(),t._UZ(75,"input",43),t.qZA(),t.TgZ(76,"div",6)(77,"label",44),t._uU(78,"Fabric Weight"),t.qZA(),t._UZ(79,"input",45),t.qZA(),t.TgZ(80,"div",14)(81,"label",46),t._uU(82,"Wash Type"),t.qZA(),t._UZ(83,"input",47),t.qZA(),t.TgZ(84,"div",14)(85,"label",48),t._uU(86,"MOQ"),t.qZA(),t._UZ(87,"input",49),t.qZA(),t.TgZ(88,"div",6)(89,"label",50),t._uU(90,"Colors"),t.qZA(),t._UZ(91,"input",51),t.qZA(),t.TgZ(92,"div",14)(93,"label",52),t._uU(94,"Price"),t.qZA(),t._UZ(95,"input",53),t.qZA(),t.TgZ(96,"div",54)(97,"button",55),t._uU(98,"Submit"),t.qZA()()()()()()(),t._UZ(99,"app-footer")),2&r&&(t.xp6(2),t.Q6J("formGroup",o.addProductForm),t.xp6(14),t.Q6J("ngIf",o.imageUploadedSuccess),t.xp6(1),t.Q6J("ngIf",o.imageUploadedError))},dependencies:[T.O5,y.c,e._Y,e.YN,e.Kr,e.Fj,e.EJ,e.JJ,e.JL,e.sg,e.u,g]});class A{constructor(r,o,n){this.fb=r,this.router=o,this.adminAuthService=n,this.adminLoginForm=this.fb.group({email:["",e.kI.required],password:["",e.kI.required]}),this.onSubmit=()=>{this.adminAuthService.adminLogin({email:this.form.email.value,password:this.form.password.value}).subscribe(u=>{"success"===u?.type&&(localStorage.setItem("userData",JSON.stringify({token:u.token,name:u.user.name})),this.router.navigate(["/admin/add-product"]))})}}get form(){return this.adminLoginForm.controls}ngOnInit(){}}A.\u0275fac=function(r){return new(r||A)(t.Y36(e.qu),t.Y36(m.F0),t.Y36(f.Yb))},A.\u0275cmp=t.Xpm({type:A,selectors:[["app-admin-login"]],decls:20,vars:1,consts:[[1,"container"],[1,"col-lg-12","mt-5","mb-5"],[1,"row","justify-content-center"],[1,"text-center","mb-3"],[3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-4","mb-3"],["for","email"],["type","text","id","email","formControlName","email",1,"form-control"],[1,"col-lg-4"],["for","password"],["type","password","id","password","formControlName","password",1,"form-control"],[1,"col-4","pt-4"],["type","submit",1,"btn","btn-primary","col-4"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-admin-header"),t.TgZ(2,"div",1)(3,"div",2)(4,"h2",3),t._uU(5,"Admin Login"),t.qZA(),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"div",9)(13,"label",10),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",11),t.qZA(),t.TgZ(16,"div",12)(17,"button",13),t._uU(18,"Login"),t.qZA()()()()()()(),t._UZ(19,"app-footer")),2&r&&(t.xp6(6),t.Q6J("formGroup",o.adminLoginForm))},dependencies:[y.c,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,g]});var S=l(723),P=l(7706);const w=function(i){return["/admin/edit-product",i]};function N(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"div",6),t._UZ(1,"img",7),t.TgZ(2,"p",8)(3,"span"),t._uU(4),t.qZA(),t.TgZ(5,"span",9),t._uU(6),t.qZA(),t.TgZ(7,"span",9),t._uU(8),t.ALo(9,"removeDash"),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"ul",10)(13,"li",11)(14,"span"),t._uU(15),t.qZA()(),t.TgZ(16,"li",9),t._uU(17),t.qZA(),t.TgZ(18,"li")(19,"span"),t._uU(20),t.qZA(),t.TgZ(21,"span"),t._uU(22),t.qZA(),t.TgZ(23,"span"),t._uU(24),t.qZA()()(),t.TgZ(25,"div",12)(26,"a",13),t._uU(27,"Edit"),t.qZA(),t.TgZ(28,"button",14),t.NdJ("click",function(){const s=t.CHM(o).$implicit,u=t.oxw();return t.KtG(u.deleteProduct(s.article_no))}),t._uU(29,"Delete"),t.qZA()()()}if(2&i){const o=r.$implicit,n=t.oxw();t.xp6(1),t.s9C("alt",null==o.product_images[0]?null:o.product_images[0].name),t.Q6J("src",n.BASE_PATH+(null==o.product_images[0]?null:o.product_images[0].path)+"/"+(null==o.product_images[0]?null:o.product_images[0].name),t.LSH),t.xp6(3),t.hij("",o.colors," "),t.xp6(2),t.hij("",o.category," "),t.xp6(2),t.hij("",t.lcZ(9,12,o.type)," -"),t.xp6(3),t.Oqu(o.article_no),t.xp6(4),t.Oqu(o.fabric),t.xp6(2),t.Oqu(o.fitting),t.xp6(3),t.hij("",o.fabric_weight," OZ -"),t.xp6(2),t.hij("",o.moq," Pcs -"),t.xp6(2),t.hij("$ ",o.price,""),t.xp6(2),t.Q6J("routerLink",t.VKq(14,w,o.article_no))}}function x(i,r){1&i&&(t.TgZ(0,"div",15)(1,"h3",16),t._uU(2,"No Product Found"),t.qZA()())}class b{constructor(r,o){this.globalService=r,this.productService=o,this.BASE_PATH=S.sb,this.getProducts=()=>{this.productService.getAllProducts().subscribe(a=>{this.products=a})},this.deleteProduct=n=>{window.confirm("Are you sure?")&&this.productService.deleteProduct(n).subscribe(s=>{"success"===s.type&&this.globalService.reloadCurrentRoute()})}}ngOnInit(){this.getProducts()}}b.\u0275fac=function(r){return new(r||b)(t.Y36(f.Uh),t.Y36(f.M5))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-products"]],decls:9,vars:5,consts:[[1,"container"],[1,"col-lg-12","mt-5","mb-5"],[1,"row"],[1,"text-center","mb-3"],["class","col-3",4,"ngFor","ngForOf"],["class","mt-5 mb-5",4,"ngIf"],[1,"col-3"],[1,"img-thumbnail",3,"src","alt"],[1,"mb-0"],[1,"text-capitalize"],[1,"list-group"],[1,"list-item"],[1,"mb-3","mt-3"],["type","button",1,"btn","btn-primary",3,"routerLink"],["type","button",1,"btn","btn-danger",3,"click"],[1,"mt-5","mb-5"],[1,"text-danger"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-admin-header"),t.TgZ(2,"div",1)(3,"div",2)(4,"h2",3),t._uU(5,"Products"),t.qZA(),t.YNc(6,N,30,16,"div",4),t.ALo(7,"sortBy"),t.YNc(8,x,3,0,"div",5),t.qZA()()()),2&r&&(t.xp6(6),t.Q6J("ngForOf",t.xi3(7,2,o.products,"desc")),t.xp6(2),t.Q6J("ngIf",0===(null==o.products?null:o.products.length)))},dependencies:[T.sg,T.O5,m.rH,g,P.W,P.Q]});class q{constructor(r,o,n){this.fb=r,this.router=o,this.adminAuthService=n,this.createAdminUserForm=this.fb.group({name:["",e.kI.required],email:["",e.kI.required],password:["",e.kI.required]}),this.onSubmit=()=>{this.adminAuthService.createAdminUser({name:this.form.name.value,email:this.form.email.value,password:this.form.password.value}).subscribe(u=>{"success"===u.type&&this.router.navigate(["/admin/add-product"])})}}get form(){return this.createAdminUserForm.controls}ngOnInit(){}}q.\u0275fac=function(r){return new(r||q)(t.Y36(e.qu),t.Y36(m.F0),t.Y36(f.Yb))},q.\u0275cmp=t.Xpm({type:q,selectors:[["app-create-admin-user"]],decls:17,vars:1,consts:[[1,"container"],[1,"col-lg-12","mt-5","mb-5"],[1,"row","justify-content-center"],[1,"text-center","mb-3"],[1,"col-lg-6",3,"formGroup","ngSubmit"],[1,"mb-3"],["type","text","placeholder","Name","formControlName","name",1,"form-control"],["type","text","placeholder","Email","formControlName","email",1,"form-control"],["type","password","placeholder","Password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-primary","col-4"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-admin-header"),t.TgZ(2,"div",1)(3,"div",2)(4,"h2",3),t._uU(5,"Create New Admin"),t.qZA(),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(7,"div",5),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"div",5),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"div",5)(14,"button",9),t._uU(15,"Create"),t.qZA()()()()()(),t._UZ(16,"app-footer")),2&r&&(t.xp6(6),t.Q6J("formGroup",o.createAdminUserForm))},dependencies:[y.c,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,g]});class U{get form(){return this.updateProductForm.controls}constructor(r,o,n,a){this.fb=r,this.productService=o,this.router=n,this.route=a,this.productId=this.route.snapshot.paramMap.get("id"),this.imageUploadForm=this.fb.group({article_no:["",e.kI.required],product_images:["",e.kI.required]}),this.updateProductForm=this.fb.group({sizes:["",e.kI.required],colors:["",e.kI.required],fitting:["",e.kI.required],fabric:["",e.kI.required],fabric_weight:["",e.kI.required],wash_type:["",e.kI.required],moq:["",e.kI.required],price:["",e.kI.required],article_no:["",e.kI.required],category:["",e.kI.required],type:["",e.kI.required],length:["",e.kI.required],slug:["",e.kI.required]}),this.getProductDetails=s=>{this.productService.getProductDetails(s).subscribe(c=>{c.map(d=>{this.updateProductForm=this.fb.group({sizes:[d.sizes,e.kI.required],colors:[d.colors,e.kI.required],fitting:[d.fitting,e.kI.required],fabric:[d.fabric,e.kI.required],fabric_weight:[d.fabric_weight,e.kI.required],wash_type:[d.wash_type,e.kI.required],moq:[d.moq,e.kI.required],price:[d.price,e.kI.required],article_no:[d.article_no,e.kI.required],category:[d.category,e.kI.required],type:[d.type,e.kI.required],length:[d.length,e.kI.required],slug:[d.slug,e.kI.required]})})})},this.fileOnChange=s=>{const u=new FormData,c=s.target.files;for(let v=0;v<c.length;v++)u.append(`product_images[${v}]`,c[v]);u.append("article_no",this.form.article_no.value),this.productService.productImageUpload(u).subscribe(v=>v)},this.onSubmit=()=>{const s={id:this.productId,sizes:this.updateProductForm.get("sizes").value,colors:this.updateProductForm.get("colors").value,fitting:this.updateProductForm.get("fitting").value,fabric:this.updateProductForm.get("fabric").value,fabric_weight:this.updateProductForm.get("fabric_weight").value,wash_type:this.updateProductForm.get("wash_type").value,price:this.updateProductForm.get("price").value,moq:this.updateProductForm.get("moq").value,article_no:this.updateProductForm.get("article_no").value,category:this.updateProductForm.get("category").value,type:this.updateProductForm.get("type").value,length:this.updateProductForm.get("length").value,slug:this.updateProductForm.get("slug").value};this.productService.updateProduct(s).subscribe(u=>{"success"===u.type&&this.router.navigate(["/admin/products"])})}}ngOnInit(){this.getProductDetails(this.productId)}}U.\u0275fac=function(r){return new(r||U)(t.Y36(e.qu),t.Y36(f.M5),t.Y36(m.F0),t.Y36(m.gz))},U.\u0275cmp=t.Xpm({type:U,selectors:[["app-edit-product"]],decls:98,vars:1,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"col-lg-12","mt-5","mb-5"],[1,"row","justify-content-center"],[1,"text-center","mb-3"],[1,"row","mb-3"],[1,"col-4","mb-3"],["for","article-no"],["id","article-no","formControlName","article_no",1,"form-control"],[1,"col-lg-4"],["for","product-files"],["type","file","id","product-files","multiple","",1,"form-control",3,"change"],[1,"col-4"],["for","category"],["formControlName","category",1,"form-control"],["value","men"],["value","women"],["value","boys"],["value","girls"],["for","type"],["formControlName","type",1,"form-control"],["value","jeans-pant"],["value","chino-pant"],["value","cargo-trouser"],["value","biker-jeans"],["for","length"],["formControlName","length",1,"form-control"],["value","long"],["value","short"],["for","product-slug"],["type","text","id","product-slug","formControlName","slug",1,"form-control"],["for","sizes"],["type","text","id","sizes","formControlName","sizes",1,"form-control"],["for","fitting"],["id","fitting","formControlName","fitting",1,"form-control"],["value","slim"],["value","straight"],["value","skinny"],["value","regular"],["value","ankle"],["for","fabric"],["type","text","id","fabric","formControlName","fabric",1,"form-control"],["for","fabric-weight"],["type","text","id","fabric-weight","formControlName","fabric_weight",1,"form-control"],["for","wash-type"],["type","text","id","wash-type","formControlName","wash_type",1,"form-control"],["for","moq"],["type","text","id","moq","formControlName","moq",1,"form-control"],["for","colors"],["type","text","id","colors","formControlName","colors",1,"form-control"],["for","price"],["type","text","id","price","formControlName","price",1,"form-control"],[1,"col-4","pt-4"],["type","submit",1,"btn","btn-primary","col-4"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0),t._UZ(1,"app-admin-header"),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",2)(4,"div",3)(5,"h2",4),t._uU(6,"Add Product"),t.qZA(),t.TgZ(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Article No."),t.qZA(),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"div",9)(13,"label",10),t._uU(14,"Product Files"),t.qZA(),t.TgZ(15,"input",11),t.NdJ("change",function(a){return o.fileOnChange(a)}),t.qZA()(),t.TgZ(16,"div",12)(17,"label",13),t._uU(18,"Category"),t.qZA(),t.TgZ(19,"select",14)(20,"option",15),t._uU(21,"Men"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"Women"),t.qZA(),t.TgZ(24,"option",17),t._uU(25,"Boys"),t.qZA(),t.TgZ(26,"option",18),t._uU(27,"Girls"),t.qZA()()(),t.TgZ(28,"div",6)(29,"label",19),t._uU(30,"Product Type"),t.qZA(),t.TgZ(31,"select",20)(32,"option",21),t._uU(33,"Jeans Pant"),t.qZA(),t.TgZ(34,"option",22),t._uU(35,"Chino Pant"),t.qZA(),t.TgZ(36,"option",23),t._uU(37,"Cargo Trouser"),t.qZA(),t.TgZ(38,"option",24),t._uU(39,"Biker Jeans"),t.qZA()()(),t.TgZ(40,"div",12)(41,"label",25),t._uU(42,"Product Length"),t.qZA(),t.TgZ(43,"select",26)(44,"option",27),t._uU(45,"Long"),t.qZA(),t.TgZ(46,"option",28),t._uU(47,"Short"),t.qZA()()(),t.TgZ(48,"div",6)(49,"label",29),t._uU(50,"Product Slug"),t.qZA(),t._UZ(51,"input",30),t.qZA(),t.TgZ(52,"div",12)(53,"label",31),t._uU(54,"Sizes"),t.qZA(),t._UZ(55,"input",32),t.qZA(),t.TgZ(56,"div",6)(57,"label",33),t._uU(58,"Fitting"),t.qZA(),t.TgZ(59,"select",34)(60,"option",35),t._uU(61,"Slim"),t.qZA(),t.TgZ(62,"option",36),t._uU(63,"Straight"),t.qZA(),t.TgZ(64,"option",37),t._uU(65,"Skinny"),t.qZA(),t.TgZ(66,"option",38),t._uU(67,"Regular"),t.qZA(),t.TgZ(68,"option",39),t._uU(69,"Ankle"),t.qZA()()(),t.TgZ(70,"div",12)(71,"label",40),t._uU(72,"Fabric Content"),t.qZA(),t._UZ(73,"input",41),t.qZA(),t.TgZ(74,"div",6)(75,"label",42),t._uU(76,"Fabric Weight"),t.qZA(),t._UZ(77,"input",43),t.qZA(),t.TgZ(78,"div",12)(79,"label",44),t._uU(80,"Wash Type"),t.qZA(),t._UZ(81,"input",45),t.qZA(),t.TgZ(82,"div",12)(83,"label",46),t._uU(84,"MOQ"),t.qZA(),t._UZ(85,"input",47),t.qZA(),t.TgZ(86,"div",6)(87,"label",48),t._uU(88,"Colors"),t.qZA(),t._UZ(89,"input",49),t.qZA(),t.TgZ(90,"div",12)(91,"label",50),t._uU(92,"Price"),t.qZA(),t._UZ(93,"input",51),t.qZA(),t.TgZ(94,"div",52)(95,"button",53),t._uU(96,"Submit"),t.qZA()()()()()()(),t._UZ(97,"app-footer")),2&r&&(t.xp6(2),t.Q6J("formGroup",o.updateProductForm))},dependencies:[y.c,e._Y,e.YN,e.Kr,e.Fj,e.EJ,e.JJ,e.JL,e.sg,e.u,g]});const J=[{path:"login",component:A},{path:"add-product",component:_,canActivate:[p]},{path:"edit-product/:id",component:U,canActivate:[p]},{path:"products",component:b,canActivate:[p]},{path:"create-admin-user",component:q,canActivate:[p]},{path:"",redirectTo:"/admin/login",pathMatch:"full"}];class Z{}Z.\u0275fac=function(r){return new(r||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({imports:[m.Bz.forChild(J),m.Bz]});var L=l(1534);class h{}h.\u0275fac=function(r){return new(r||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[T.ez,Z,L.m,k.JF,e.UX]})}}]);