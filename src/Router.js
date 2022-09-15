import React, { Suspense, lazy } from "react";
import { Router, Switch, Route, HashRouter } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category";
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions";
import { ContextLayout } from "./utility/context/Layout";

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
);
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
);
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"));
const aboutUs = lazy(() => import("./views/apps/about/AboutUs"));
const AllaboutUs = lazy(() => import("./views/apps/about/AllaboutUs"));
const EditAboutUs = lazy(() => import("./views/apps/about/EditAboutUs"));
const TermConditionList = lazy(() =>
  import("./views/apps/termscondition/TermConditionList")
);
const AddTermsCondition = lazy(() =>
  import("./views/apps/termscondition/AddTermsCondition")
);
const EditTermCondition = lazy(() =>
  import("./views/apps/termscondition/EditTermCondition")
);
const helpUs = lazy(() => import("./views/apps/helpUs/HelpUS"));
const EdithelpusForm = lazy(() => import("./views/apps/helpUs/EdithelpusForm"));
const ViewHelpUs = lazy(() => import("./views/apps/helpUs/ViewHelpUs"));
const notificationList = lazy(() =>
  import("./views/apps/notification/NotificationList")
);
const addNotification = lazy(() =>
  import("./views/apps/notification/AddNotification")
);
const productDetail = lazy(() =>
  import("./views/apps/ecommerce/detail/Detail")
);
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"));

const UserList = lazy(() => import("./views/apps/user/UserList"));
const AddUser = lazy(() => import("./views/apps/user/AddUser"));
const ViewUser = lazy(() => import("./views/apps/user/ViewUser"));
const EditUser = lazy(() => import("./views/apps/user/EditUser"));

//Wallet//
const WalletManagement = lazy(() =>
  import("./views/apps/wallet/WalletManagement")
);

//Transaction history//
const TransactionHistory = lazy(() =>
  import("./views/apps/transaction/TransactionHistory")
);
// memberShip//
const MemberShipList = lazy(() =>
  import("./views/apps/membership/MemberShipList")
);
const AddMemberShip = lazy(() =>
  import("./views/apps/membership/AddMemberShip")
);
const EditMemberShip = lazy(() =>
  import("./views/apps/membership/EditMemberShip")
);

//Astrology dashboard list//
const TodayAstrologerList = lazy(() =>
  import("./views/apps/dashboardlist/TodayAstrologerList")
);

const TodayCustomerList = lazy(() =>
  import("./views/apps/dashboardlist/TodayCustomerList")
);
const TodayRechargeList = lazy(() =>
  import("./views/apps/dashboardlist/TodayRechargeList")
);
const TodayCallHistory = lazy(() =>
  import("./views/apps/dashboardlist/TodayCallHistory")
);

// call management
const CallHistroy = lazy(() =>
  import("./views/apps/callmanagement/CallHistory")
);
const CallReject = lazy(() =>
  import("./views/apps/callmanagement/CallReject.js")
);

// Package management
const AllPackage = lazy(() => import("./views/apps/packagemanager/Allpackage"));
const PackageOffer = lazy(() =>
  import("./views/apps/packagemanager/PackageOffer")
);
const UserRecharge = lazy(() =>
  import("./views/apps/packagemanager/UserRecharge")
);
const Commission = lazy(() => import("./views/apps/packagemanager/Commission"));

//Astrology//
const AstrologerList = lazy(() =>
  import("./views/apps/astrology/AstrologerList")
);
const AddAstrologer = lazy(() =>
  import("./views/apps/astrology/AddAstrologer")
);
const EditAstrologer = lazy(() =>
  import("./views/apps/astrology/EditAstrologer")
);
const ViewAstrologer = lazy(() =>
  import("./views/apps/astrology/ViewAstrologer")
);

// panel
const UserRequestList = lazy(() =>
  import("./views/apps/userrequest/UserRequestList")
);

const OrderHisList = lazy(() =>
  import("./views/apps/orderhistory/OrderHisList")
);

const ProductList = lazy(() => import("./views/apps/products/ProductList"));
const AddProduct = lazy(() => import("./views/apps/products/AddProduct"));

const UserChatList = lazy(() => import("./views/apps/chat/UserChatList"));

const FaqUserList = lazy(() => import("./views/apps/user/FaqUserList"));

const CallHistory = lazy(() => import("./views/apps/historycall/CallHistory"));

const PredictionList = lazy(() =>
  import("./views/apps/prediction/PredictionList")
);
const AddPrediction = lazy(() =>
  import("./views/apps/prediction/AddPrediction")
);
const EditPrediction = lazy(() =>
  import("./views/apps/prediction/EditPrediction")
);
const PackageList = lazy(() => import("./views/apps/poojapackage/PackageList"));
const AddPackage = lazy(() => import("./views/apps/poojapackage/AddPackage"));
const EditPackage = lazy(() => import("./views/apps/poojapackage/EditPackage"));
const CallReport = lazy(() => import("./views/apps/report/CallReport"));
const EarningReport = lazy(() => import("./views/apps/report/EarningReport"));
const PayoutReport = lazy(() => import("./views/apps/report/PayoutReport"));

// close

// setting
const addBank = lazy(() => import("./views/apps/setting/bank/AddBank"));
const bankList = lazy(() => import("./views/apps/setting/bank/BankList"));
const editBank = lazy(() => import("./views/apps/setting/bank/EditBank"));
const viewBank = lazy(() => import("./views/apps/setting/bank/ViewBank"));
const mOCList = lazy(() => import("./views/apps/setting/moc/MOCList"));
const addMOC = lazy(() => import("./views/apps/setting/moc/AddMOC"));
const editMOC = lazy(() => import("./views/apps/setting/moc/EditMOC"));
const viewMOC = lazy(() => import("./views/apps/setting/moc/ViewMOC"));
const addTank = lazy(() => import("./views/apps/setting/tank/AddTank"));
const bayList = lazy(() => import("./views/apps/setting/bay/BayList"));
const addBay = lazy(() => import("./views/apps/setting/bay/AddBay"));
const enquiryForm = lazy(() => import("./views/apps/setting/EnquiryForm"));
const grid = lazy(() => import("./views/ui-elements/grid/Grid"));
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
);
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
);
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
);
const colors = lazy(() => import("./views/ui-elements/colors/Colors"));
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
);
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"));
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
);
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
);
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
);
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"));
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"));
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
);
const Carousel = lazy(() =>
  import("./components/reactstrap/carousel/Carousel")
);
const Collapse = lazy(() =>
  import("./components/reactstrap/collapse/Collapse")
);
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
);
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
);
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"));
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
);
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
);
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"));
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"));
const TabPills = lazy(() =>
  import("./components/reactstrap/tabPills/TabPills")
);
const Tooltips = lazy(() =>
  import("./components/reactstrap/tooltips/Tooltips")
);
const Popovers = lazy(() =>
  import("./components/reactstrap/popovers/Popovers")
);
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"));
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
);
const Progress = lazy(() =>
  import("./components/reactstrap/progress/Progress")
);
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"));
const Spinners = lazy(() =>
  import("./components/reactstrap/spinners/Spinners")
);
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"));
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
);
const chips = lazy(() => import("./components/@vuexy/chips/Chips"));
const divider = lazy(() => import("./components/@vuexy/divider/Divider"));
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"));
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"));
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"));
const select = lazy(() => import("./views/forms/form-elements/select/Select"));
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
);
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
);
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"));
const input = lazy(() => import("./views/forms/form-elements/input/Input"));
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
);
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
);
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
);
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
);
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
);
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"));
const formik = lazy(() => import("./views/forms/formik/Formik"));
const tables = lazy(() => import("./views/tables/reactstrap/Tables"));
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
);
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"));
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"));
const profile = lazy(() => import("./views/pages/profile/Profile"));
const faq = lazy(() => import("./views/pages/faq/FAQ"));

const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
);
const search = lazy(() => import("./views/pages/search/Search"));
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
);
const invoice = lazy(() => import("./views/pages/invoice/Invoice"));
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const error500 = lazy(() => import("./views/pages/misc/error/500"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"));
const apex = lazy(() => import("./views/charts/apex/ApexCharts"));
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"));
const extreme = lazy(() => import("./views/charts/recharts/Recharts"));
const leafletMaps = lazy(() => import("./views/maps/Maps"));
const toastr = lazy(() => import("./extensions/toastify/Toastify"));
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"));
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"));
const uploader = lazy(() => import("./extensions/dropzone/Dropzone"));
const editor = lazy(() => import("./extensions/editor/Editor"));
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"));
const tour = lazy(() => import("./extensions/tour/Tour"));
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
);
const menu = lazy(() => import("./extensions/contexify/Contexify"));
const swiper = lazy(() => import("./extensions/swiper/Swiper"));
const i18n = lazy(() => import("./extensions/i18n/I18n"));
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"));
const tree = lazy(() => import("./extensions/treeview/TreeView"));
const Import = lazy(() => import("./extensions/import-export/Import"));
const Export = lazy(() => import("./extensions/import-export/Export"));
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
);

const Login = lazy(() => import("./views/pages/authentication/login/Login"));
const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
);
const lockScreen = lazy(() =>
  import("./views/pages/authentication/LockScreen")
);
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
);
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
);

const regastrologer = lazy(() =>
  import("./views/pages/authentication/RegAstrologer")
);
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
);

const otpVerify = lazy(() => import("./views/pages/authentication/OtpVerify"));
const otpScreen = lazy(() => import("./views/pages/authentication/OtpScreen"));

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  componentDidMount() {
    let data = localStorage.getItem("auth");
    sessionStorage.clear();
    if (data === undefined || data === null) {
      //history.push("/#/pages/login")

      window.location.replace("/#/pages/login");
    }
  }
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder

      <Router history={history}>
        <HashRouter>
          <Switch>
            {/*<AppRoute exact={true} path="/" component={home} fullLayout /> */}
            <AppRoute exact={true} path="/" component={analyticsDashboard} />
            <AppRoute
              exact={true}
              path="/ecommerce-dashboard"
              component={ecommerceDashboard}
            />
            <AppRoute path="/app/user/userList" component={UserList} />
            <AppRoute path="/app/user/addUser" component={AddUser} />
            <AppRoute path="/app/userride/editUser" component={EditUser} />
            <AppRoute path="/app/user/viewUser" component={ViewUser} />
            {/* Astrologer dashboard list */}
            <AppRoute
              path="/app/dashboardlist/todayastrologerlist"
              component={TodayAstrologerList}
            />
            <AppRoute
              path="/app/dashboardlist/todaycustomerlist"
              component={TodayCustomerList}
            />
            <AppRoute
              path="/app/dashboardlist/todayrechargelist"
              component={TodayRechargeList}
            />
            <AppRoute
              path="/app/dashboardlist/todaycallhistory"
              component={TodayCallHistory}
            />
            {/* Astrologer */}
            <AppRoute
              path="/app/astrology/astrologerList"
              component={AstrologerList}
            />
            <AppRoute
              path="/app/astrology/addAstrologer"
              component={AddAstrologer}
            />
            <AppRoute
              path="/app/astrology/editAstrologer"
              component={EditAstrologer}
            />
            <AppRoute
              path="/app/astrology/viewAstrologer"
              component={ViewAstrologer}
            />
            {/* panel  */}
            <AppRoute
              path="/app/userrequest/userrequestlist"
              component={UserRequestList}
            />
            <AppRoute
              path="/app/orderhistory/orderhislist"
              component={OrderHisList}
            />
            <AppRoute
              path="/app/products/productlist"
              component={ProductList}
            />
            <AppRoute path="/app/products/addproduct" component={AddProduct} />
            <AppRoute path="/app/chat/userchatlist" component={UserChatList} />
            <AppRoute
              path="/app/historycall/callhistory"
              component={CallHistory}
            />
            <AppRoute path="/app/user/faquserlist" component={FaqUserList} />
            <AppRoute
              path="/app/prediction/predictionlist"
              component={PredictionList}
            />
            <AppRoute
              path="/app/prediction/addprediction"
              component={AddPrediction}
            />
            <AppRoute
              path="/app/prediction/editprediction"
              component={EditPrediction}
            />
            <AppRoute
              path="/app/poojapackage/packagelist"
              component={PackageList}
            />
            <AppRoute
              path="/app/poojapackage/addpackage"
              component={AddPackage}
            />
            <AppRoute
              path="/app/poojapackage/editpackage"
              component={EditPackage}
            />
            <AppRoute path="/app/report/callreport" component={CallReport} />
            <AppRoute
              path="/app/report/earningreport"
              component={EarningReport}
            />
            <AppRoute
              path="/app/report/payoutreport"
              component={PayoutReport}
            />
            {/* Call Management */}
            <AppRoute
              path="/app/callmanagement/callhistory"
              component={CallHistroy}
            />
            <AppRoute
              path="/app/callmanagement/callgreject"
              component={CallReject}
            />
            {/* Package Management */}
            <AppRoute
              path="/app/packagemanager/allPackage"
              component={AllPackage}
            />
            <AppRoute
              path="/app/packagemanager/userrecharge"
              component={UserRecharge}
            />
            <AppRoute
              path="/app/packagemanager/commission"
              component={Commission}
            />
            <AppRoute
              path="/app/packagemanager/packageoffer"
              component={PackageOffer}
            />
            {/* setting */}
            <AppRoute
              exact={true}
              path="/app/setting/bank/bankList"
              component={bankList}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bank/addBank"
              component={addBank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bank/editBank/:id"
              component={editBank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bank/viewBank/:id"
              component={viewBank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/mOCList"
              component={mOCList}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/editMOC"
              component={editMOC}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/addMOC"
              component={addMOC}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/viewMOC"
              component={viewMOC}
            />
            <AppRoute
              exact={true}
              path="/app/setting/enquiryForm"
              component={enquiryForm}
            />
            <AppRoute
              exact={true}
              path="/app/setting/tank/addTank"
              component={addTank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bay/bayList"
              component={bayList}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bay/addBay"
              component={addBay}
            />
            <AppRoute
              exact={true}
              path="/email"
              component={() => <Redirect to="/email/inbox" />}
            />
            {/* wallet */}
            <AppRoute
              path="/app/wallet/walletManagement"
              component={WalletManagement}
            />
            {/* Transaction history */}
            <AppRoute
              path="/app/transaction/transactionHistory"
              component={TransactionHistory}
            />
            {/* memberSHip */}
            <AppRoute
              exact={true}
              path="/app/membership/memberShipList"
              component={MemberShipList}
            />
            <AppRoute
              exact={true}
              path="/app/membership/addMemberShip"
              component={AddMemberShip}
            />
            <AppRoute
              exact={true}
              path="/app/membership/editMemberShip"
              component={EditMemberShip}
            />
            {/* my componet */}
            <AppRoute
              exact={true}
              path="/todo"
              component={() => <Redirect to="/todo/all" />}
            />
            <AppRoute exact={true} path="/ecommerce/shop" component={shop} />
            <AppRoute
              exact={true}
              path="/ecommerce/product-detail"
              component={productDetail}
            />
            <AppRoute
              exact={true}
              path="/app/about/aboutUs"
              component={aboutUs}
            />
            <AppRoute
              exact={true}
              path="/app/about/AllaboutUs"
              component={AllaboutUs}
            />
            <AppRoute
              exact={true}
              path="/app/about/EditAboutUs/:id"
              component={EditAboutUs}
            />
            <AppRoute
              exact={true}
              path="/app/termscondition/AddTermsCondition"
              component={AddTermsCondition}
            />
            <AppRoute
              exact={true}
              path="/app/termscondition/EditTermCondition/:id"
              component={EditTermCondition}
            />
            <AppRoute
              exact={true}
              path="/app/termscondition/TermConditionList"
              component={TermConditionList}
            />
            <AppRoute
              exact={true}
              path="/app/helpUs/HelpUs"
              component={helpUs}
            />
            <AppRoute
              exact={true}
              path="/app/helpUs/EdithelpusForm/:id"
              component={EdithelpusForm}
            />
            <AppRoute
              exact={true}
              path="/app/helpUs/ViewHelpUs/:id"
              component={ViewHelpUs}
            />
            <AppRoute
              exact={true}
              path="/app/notification/NotificationList"
              component={notificationList}
            />
            <AppRoute
              exact={true}
              path="/app/notification/AddNotification"
              component={addNotification}
            />
            <AppRoute
              exact={true}
              path="/ecommerce/checkout"
              component={checkout}
              permission="admin"
            />
            <AppRoute
              exact={true}
              path="/data-list/list-view"
              component={listView}
            />
            <AppRoute
              exact={true}
              path="/data-list/thumb-view"
              component={thumbView}
            />
            <AppRoute exact={true} path="/ui-element/grid" component={grid} />
            <AppRoute
              exact={true}
              path="/ui-element/typography"
              component={typography}
            />
            <AppRoute
              exact={true}
              path="/ui-element/textutilities"
              component={textutilities}
            />
            <AppRoute
              exact={true}
              path="/ui-element/syntaxhighlighter"
              component={syntaxhighlighter}
            />
            <AppRoute exact={true} path="/colors/colors" component={colors} />
            <AppRoute
              exact={true}
              path="/icons/reactfeather"
              component={reactfeather}
            />
            <AppRoute exact={true} path="/cards/basic" component={basicCards} />
            <AppRoute
              exact={true}
              path="/cards/statistics"
              component={statisticsCards}
            />
            <AppRoute
              exact={true}
              path="/cards/analytics"
              component={analyticsCards}
            />
            <AppRoute
              exact={true}
              path="/cards/action"
              component={actionCards}
            />
            <AppRoute
              exact={true}
              path="/components/alerts"
              component={Alerts}
            />
            <AppRoute
              exact={true}
              path="/components/buttons"
              component={Buttons}
            />
            <AppRoute
              exact={true}
              path="/components/breadcrumbs"
              component={Breadcrumbs}
            />
            <AppRoute
              exact={true}
              path="/components/carousel"
              component={Carousel}
            />
            <AppRoute
              exact={true}
              path="/components/collapse"
              component={Collapse}
            />
            <AppRoute
              exact={true}
              path="/components/dropdowns"
              component={Dropdowns}
            />
            <AppRoute
              exact={true}
              path="/components/list-group"
              component={ListGroup}
            />
            <AppRoute
              exact={true}
              path="/components/modals"
              component={Modals}
            />
            <AppRoute
              exact={true}
              path="/components/pagination"
              component={Pagination}
            />
            <AppRoute
              exact={true}
              path="/components/nav-component"
              component={NavComponent}
            />
            <AppRoute
              exact={true}
              path="/components/navbar"
              component={Navbar}
            />
            <AppRoute
              exact={true}
              path="/components/tabs-component"
              component={Tabs}
            />
            <AppRoute
              exact={true}
              path="/components/pills-component"
              component={TabPills}
            />
            <AppRoute
              exact={true}
              path="/components/tooltips"
              component={Tooltips}
            />
            <AppRoute
              exact={true}
              path="/components/popovers"
              component={Popovers}
            />
            <AppRoute
              exact={true}
              path="/components/badges"
              component={Badge}
            />
            <AppRoute
              exact={true}
              path="/components/pill-badges"
              component={BadgePill}
            />
            <AppRoute
              exact={true}
              path="/components/progress"
              component={Progress}
            />
            <AppRoute
              exact={true}
              path="/components/media-objects"
              component={Media}
            />
            <AppRoute
              exact={true}
              path="/components/spinners"
              component={Spinners}
            />
            <AppRoute
              exact={true}
              path="/extra-components/auto-complete"
              component={AutoComplete}
            />
            <AppRoute
              exact={true}
              path="/extra-components/avatar"
              component={avatar}
            />
            <AppRoute
              exact={true}
              path="/extra-components/chips"
              component={chips}
            />
            <AppRoute
              exact={true}
              path="/extra-components/divider"
              component={divider}
            />
            <AppRoute
              exact={true}
              path="/forms/wizard"
              component={vuexyWizard}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/select"
              component={select}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/switch"
              component={switchComponent}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/checkbox"
              component={checkbox}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/radio"
              component={radio}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input"
              component={input}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input-group"
              component={group}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/number-input"
              component={numberInput}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/textarea"
              component={textarea}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/pickers"
              component={pickers}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input-mask"
              component={inputMask}
            />
            <AppRoute
              exact={true}
              path="/forms/layout/form-layout"
              component={layout}
            />
            <AppRoute exact={true} path="/forms/formik" component={formik} />{" "}
            <AppRoute
              exact={true}
              path="/tables/reactstrap"
              component={tables}
            />
            <AppRoute
              exact={true}
              path="/tables/react-tables"
              component={ReactTables}
            />
            <AppRoute exact={true} path="/tables/agGrid" component={Aggrid} />
            <AppRoute
              exact={true}
              path="/tables/data-tables"
              component={DataTable}
            />
            <AppRoute exact={true} path="/pages/profile" component={profile} />
            <AppRoute exact={true} path="/pages/faq" component={faq} />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base"
              component={knowledgeBase}
            />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base/category"
              component={knowledgeBaseCategory}
            />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base/category/questions"
              component={knowledgeBaseQuestion}
            />
            <AppRoute exact={true} path="/pages/search" component={search} />
            <AppRoute
              exact={true}
              path="/pages/account-settings"
              component={accountSettings}
            />
            <AppRoute exact={true} path="/pages/invoice" component={invoice} />
            <AppRoute
              exact={true}
              path="/misc/coming-soon"
              component={comingSoon}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/error/404"
              component={error404}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/login"
              component={Login}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/register"
              component={register}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/regastrologer"
              component={regastrologer}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/forgot-password"
              component={forgotPassword}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/lock-screen"
              component={lockScreen}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/reset-password/:id"
              component={resetPassword}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/otp-verify"
              component={otpVerify}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/otp-Screen"
              component={otpScreen}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/error/500"
              component={error500}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/not-authorized"
              component={authorized}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/maintenance"
              component={maintenance}
              fullLayout
            />
            <AppRoute exact={true} path="/charts/apex" component={apex} />
            <AppRoute exact={true} path="/charts/chartjs" component={chartjs} />
            <AppRoute
              exact={true}
              path="/charts/recharts"
              component={extreme}
            />
            <AppRoute
              exact={true}
              path="/maps/leaflet"
              component={leafletMaps}
            />
            <AppRoute
              exact={true}
              path="/extensions/sweet-alert"
              component={sweetAlert}
            />
            <AppRoute
              exact={true}
              path="/extensions/toastr"
              component={toastr}
            />
            <AppRoute
              exact={true}
              path="/extensions/slider"
              component={rcSlider}
            />
            <AppRoute
              exact={true}
              path="/extensions/file-uploader"
              component={uploader}
            />
            <AppRoute
              exact={true}
              path="/extensions/wysiwyg-editor"
              component={editor}
            />
            <AppRoute
              exact={true}
              path="/extensions/drag-and-drop"
              component={drop}
            />
            <AppRoute exact={true} path="/extensions/tour" component={tour} />
            <AppRoute
              exact={true}
              path="/extensions/clipboard"
              component={clipboard}
            />
            <AppRoute
              exact={true}
              path="/extensions/context-menu"
              component={menu}
            />
            <AppRoute
              exact={true}
              path="/extensions/swiper"
              component={swiper}
            />
            <AppRoute
              exact={true}
              path="/extensions/access-control"
              component={accessControl}
            />
            <AppRoute exact={true} path="/extensions/i18n" component={i18n} />
            <AppRoute exact={true} path="/extensions/tree" component={tree} />
            <AppRoute
              exact={true}
              path="/extensions/import"
              component={Import}
            />
            <AppRoute
              exact={true}
              path="/extensions/export"
              component={Export}
            />
            <AppRoute
              exact={true}
              path="/extensions/export-selected"
              component={ExportSelected}
            />
            <AppRoute
              exact={true}
              path="/extensions/pagination"
              component={reactPaginate}
            />
            <AppRoute component={error404} fullLayout />
          </Switch>
        </HashRouter>
      </Router>
    );
  }
}
export default AppRouter;
