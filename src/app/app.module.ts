import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LibModule } from "./lib";
import { NgZorroAntdModule, NzLayoutModule } from "ng-zorro-antd";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IndexPageComponent } from "./pages/home-page/index-page/index-page.component";
import { TodayOrderPageComponent } from "./pages/home-page/today-order-page/today-order-page.component";
import { UserOrderPageComponent } from "./pages/home-page/user-order-page/user-order-page.component";
import { OldOrderPageComponent } from "./pages/home-page/old-order-page/old-order-page.component";
import { OrderDetailPageComponent } from "./pages/home-page/order-detail-page/order-detail-page.component";
import { HistoryOrderPageComponent } from "./pages/home-page/history-order-page/history-order-page.component";
import { UserManagePageComponent } from "./pages/home-page/user-manage-page/user-manage-page.component";
import { ProductGroupManagePageComponent } from "./pages/home-page/product-group-manage-page/product-group-manage-page.component";
import { ProductManagePageComponent } from "./pages/home-page/product-manage-page/product-manage-page.component";
import { StoreManagePageComponent } from "./pages/home-page/store-manage-page/store-manage-page.component";
import { TransferManagePageComponent } from "./pages/home-page/transfer-manage-page/transfer-manage-page.component";
import { SendRecordManagePageComponent } from "./pages/home-page/send-record-manage-page/send-record-manage-page.component";
import { UnconfirmOrderComponent } from "./pages/home-page/order-detail-page/unconfirm-order/unconfirm-order.component";
import { SendProductOrderComponent } from "./pages/home-page/order-detail-page/send-product-order/send-product-order.component";
import { ReciveProductOrderComponent } from "./pages/home-page/order-detail-page/recive-product-order/recive-product-order.component";
import { FinishOrderComponent } from "./pages/home-page/order-detail-page/finish-order/finish-order.component";
import { AddUserPageComponent } from "./pages/home-page/add-user-page/add-user-page.component";
// import { EditUserPageComponent } from "./pages/home-page/edit-user-page/edit-user-page.component";
import { UserDetailPageComponent } from "./pages/home-page/user-detail-page/user-detail-page.component";
import { ReductionPageComponent } from "./pages/home-page/reduction-page/reduction-page.component";
import { BangweiH5PageComponent } from "./pages/home-page/bangwei-h5-page/bangwei-h5-page.component";
import { FenxiaoUserManagePageComponent } from "./pages/home-page/fenxiao-user-manage-page/fenxiao-user-manage-page.component";
import { SubmitShopPagesComponent } from "./pages/home-page/submit-shop-pages/submit-shop-pages.component";
import { SubmitShopHistoryPageComponent } from "./pages/submit-shop-history-page/submit-shop-history-page.component";
import { VerifyFxuserPageComponent } from "./pages/home-page/verify-fxuser-page/verify-fxuser-page.component";
import { WechatPageComponent } from "./pages/wechat-page/wechat-page.component";
import { WechatButtonPageComponent } from "./pages/wechat-button-page/wechat-button-page.component";
import { FormListComponent } from "./com/form-list/form-list.component";
import { StrKeyPipe } from "./pipe/str-key.pipe";
import { AutoFormComponent } from "./com/auto-form/auto-form.component";
import { FormCreateComponent } from "./com/form-create/form-create.component";
import { FormUpdateComponent } from "./com/form-update/form-update.component";
import { OrderStateComponent } from "./com/order-state/order-state.component";
import { BillListComponent } from "./com/bill-list/bill-list.component";
import { TestShopPageComponent } from "./pages/home-page/test-shop-page/test-shop-page.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    IndexPageComponent,
    TodayOrderPageComponent,
    UserOrderPageComponent,
    OldOrderPageComponent,
    OrderDetailPageComponent,
    HistoryOrderPageComponent,
    UserManagePageComponent,
    ProductGroupManagePageComponent,
    ProductManagePageComponent,
    StoreManagePageComponent,
    TransferManagePageComponent,
    SendRecordManagePageComponent,
    UnconfirmOrderComponent,
    SendProductOrderComponent,
    ReciveProductOrderComponent,
    FinishOrderComponent,
    AddUserPageComponent,
    // EditUserPageComponent,
    UserDetailPageComponent,
    ReductionPageComponent,
    BangweiH5PageComponent,
    FenxiaoUserManagePageComponent,
    SubmitShopPagesComponent,
    SubmitShopHistoryPageComponent,
    VerifyFxuserPageComponent,
    WechatPageComponent,
    WechatButtonPageComponent,
    FormListComponent,
    StrKeyPipe,
    AutoFormComponent,
    FormCreateComponent,
    FormUpdateComponent,
    OrderStateComponent,
    BillListComponent,
    TestShopPageComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    LibModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/admin/login", pathMatch: "full" },
      { path: "admin/login", component: LoginPageComponent },
      {
        path: "admin",
        component: HomePageComponent,
        children: [
          { path: "", component: IndexPageComponent },
          { path: "today-order", component: TodayOrderPageComponent },
          { path: "user-order", component: UserOrderPageComponent },
          { path: "old-order", component: OldOrderPageComponent },
          { path: "order-detail", component: OrderDetailPageComponent }, // 订单详情页
          { path: "history-order", component: HistoryOrderPageComponent },
          { path: "user-manage", component: UserManagePageComponent },
          {
            path: "product-group-manage",
            component: ProductGroupManagePageComponent
          },
          { path: "product-manage", component: ProductManagePageComponent },
          { path: "store-manage", component: StoreManagePageComponent },
          { path: "transfer-manage", component: TransferManagePageComponent },
          {
            path: "send-record-manage",
            component: SendRecordManagePageComponent
          },
          { path: "add-user", component: AddUserPageComponent },
          // { path: "edit-user", component: EditUserPageComponent },
          { path: "user-detail", component: UserDetailPageComponent },
          { path: "reduction", component: ReductionPageComponent },
          { path: "bangwei-h5", component: BangweiH5PageComponent },
          {
            path: "fenxiao/users",
            component: FenxiaoUserManagePageComponent
          },
          {
            path: "fenxiao/submit-shops",
            component: SubmitShopPagesComponent
          },
          {
            path: "fenxiao/submit-shop-history",
            component: SubmitShopHistoryPageComponent // 提交店铺历史操作
          },
          {
            path: "fenxiao/verify-fxusers",
            component: VerifyFxuserPageComponent
          },
          {
            path: "wechat/button",
            component: WechatButtonPageComponent
          },
          {
            path: "test-shop",
            component: TestShopPageComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
