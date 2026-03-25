import React from "react";
import AccordionBodyPage from "./Accordion/AccordionBodyPage";
import AccordionHeaderPage from "./Accordion/AccordionHeaderPage";
import AccordionItemPage from "./Accordion/AccordionItemPage";
import AccordionPage from "./Accordion/AccordionPage";
import AccordionTitlePage from "./Accordion/AccordionTitlePage";
import AccordionTogglePage from "./Accordion/AccordionTogglePage";
import AlertPage from "./AlertPage";
import AnimationFadeInPage from "./Animation/AnimationFadeInPage";
import AnimationPage from "./Animation/AnimationPage";
import ButtonPage from "./Button/ButtonPage";
import CloseButtonPage from "./Button/CloseButtonPage";
import CalendarDayPage from "./Calendar/CalendarDayPage";
import CalendarDaysPage from "./Calendar/CalendarDaysPage";
import CalendarHeaderPage from "./Calendar/CalendarHeaderPage";
import CalendarLeftPage from "./Calendar/CalendarLeftPage";
import CalendarPage from "./Calendar/CalendarPage";
import CalendarRightPage from "./Calendar/CalendarRightPage";
import CalendarTitlePage from "./Calendar/CalendarTitlePage";
import CalendarWeekdayPage from "./Calendar/CalendarWeekdayPage";
import CalendarWeekdaysPage from "./Calendar/CalendarWeekdaysPage";
import CardBodyPage from "./Card/CardBodyPage";
import CardHeaderPage from "./Card/CardHeaderPage";
import CardPage from "./Card/CardPage";
import CardSubtitlePage from "./Card/CardSubtitlePage";
import CardTitlePage from "./Card/CardTitlePage";
import CenterPage from "./CenterPage";
import ColPage from "./ColPage";
import DivPage from "./DivPage";
import DrawerBodyPage from "./Drawer/DrawerBodyPage";
import DrawerHeaderPage from "./Drawer/DrawerHeaderPage";
import DrawerPage from "./Drawer/DrawerPage";
import DrawerTogglePage from "./Drawer/DrawerTogglePage";
import FormButtonPage from "./Form/FormButtonPage";
import FormInputPage from "./Form/FormInputPage";
import FormLabelPage from "./Form/FormLabelPage";
import FormPage from "./Form/FormPage";
import HomePage from "./HomePage";
import InputCheckboxPage from "./Input/InputCheckboxPage";
import InputDatePage from "./Input/InputDatePage";
import InputJsonPage from "./Input/InputJsonPage";
import InputNumberPage from "./Input/InputNumberPage";
import InputPage from "./Input/InputPage";
import InputRadioPage from "./Input/InputRadioPage";
import InputSearchPage from "./Input/InputSearchPage";
import InputSelectPage from "./Input/InputSelectPage";
import InputSwitchPage from "./Input/InputSwitchPage";
import InputTextAreaPage from "./Input/InputTextAreaPage";
import InputTextPage from "./Input/InputTextPage";
import InstallationPage from "./InstallationPage";
import LinkPage from "./LinkPage";
import MenuItemPage from "./Menu/MenuItemPage";
import MenuPage from "./Menu/MenuPage";
import MenuTogglePage from "./Menu/MenuTogglePage";
import ModalBodyPage from "./Modal/ModalBodyPage";
import ModalFooterPage from "./Modal/ModalFooterPage";
import ModalHeaderPage from "./Modal/ModalHeaderPage";
import ModalPage from "./Modal/ModalPage";
import ModalTitlePage from "./Modal/ModalTitlePage";
import PagesParent from "./Pages";
import PaginationFirstPage from "./Pagination/PaginationFirstPage";
import PaginationItemPage from "./Pagination/PaginationItemPage";
import PaginationLastPage from "./Pagination/PaginationLastPage";
import PaginationNextPage from "./Pagination/PaginationNextPage";
import PaginationPage from "./Pagination/PaginationPage";
import PaginationPreviousPage from "./Pagination/PaginationPreviousPage";
import PopupPage from "./PopupPage";
import ProgressBarPage from "./Progress/ProgressBarPage";
import ProgressPage from "./Progress/ProgressPage";
import ProgressSpinnerPage from "./Progress/ProgressSpinnerPage";
import ProgressTextPage from "./Progress/ProgressTextPage";
import ResponsivePage from "./ResponsivePage";
import RowPage from "./RowPage";
import TabPage from "./TabPage";
import TablePage from "./Table/TablePage";
import TableTdPage from "./Table/TableTdPage";
import TableThPage from "./Table/TableThPage";
import TableTrPage from "./Table/TableTrPage";
import TabsPage from "./TabsPage";
import TextPage from "./TextPage";

interface Pages extends React.FC<any> {
  Accordion: typeof AccordionPage;
  AccordionBody: typeof AccordionBodyPage;
  AccordionHeader: typeof AccordionHeaderPage;
  AccordionItem: typeof AccordionItemPage;
  AccordionTitle: typeof AccordionTitlePage;
  AccordionToggle: typeof AccordionTogglePage;
  Alert: typeof AlertPage;
  Animation: typeof AnimationPage;
  AnimationFadeIn: typeof AnimationFadeInPage;
  Button: typeof ButtonPage;
  CloseButton: typeof CloseButtonPage;
  Calendar: typeof CalendarPage;
  CalendarDay: typeof CalendarDayPage;
  CalendarDays: typeof CalendarDaysPage;
  CalendarHeader: typeof CalendarHeaderPage;
  CalendarLeft: typeof CalendarLeftPage;
  CalendarRight: typeof CalendarRightPage;
  CalendarTitle: typeof CalendarTitlePage;
  CalendarWeekday: typeof CalendarWeekdayPage;
  CalendarWeekdays: typeof CalendarWeekdaysPage;
  Card: typeof CardPage;
  CardBody: typeof CardBodyPage;
  CardHeader: typeof CardHeaderPage;
  CardSubtitle: typeof CardSubtitlePage;
  CardTitle: typeof CardTitlePage;
  Center: typeof CenterPage;
  Col: typeof ColPage;
  Div: typeof DivPage;
  Drawer: typeof DrawerPage;
  DrawerBody: typeof DrawerBodyPage;
  DrawerHeader: typeof DrawerHeaderPage;
  DrawerToggle: typeof DrawerTogglePage;
  Form: typeof FormPage;
  FormButton: typeof FormButtonPage;
  FormInput: typeof FormInputPage;
  FormLabel: typeof FormLabelPage;
  Home: typeof HomePage;
  Input: typeof InputPage;
  InputCheckbox: typeof InputCheckboxPage;
  InputJson: typeof InputJsonPage;
  InputRadio: typeof InputRadioPage;
  InputSearch: typeof InputSearchPage;
  InputSelect: typeof InputSelectPage;
  InputSwitch: typeof InputSwitchPage;
  InputDate: typeof InputDatePage;
  InputNumber: typeof InputNumberPage;
  InputText: typeof InputTextPage;
  InputTextArea: typeof InputTextAreaPage;
  Installation: typeof InstallationPage;
  Link: typeof LinkPage;
  Menu: typeof MenuPage;
  MenuItem: typeof MenuItemPage;
  MenuToggle: typeof MenuTogglePage;
  Modal: typeof ModalPage;
  ModalBody: typeof ModalBodyPage;
  ModalFooter: typeof ModalFooterPage;
  ModalHeader: typeof ModalHeaderPage;
  ModalTitle: typeof ModalTitlePage;
  Pagination: typeof PaginationPage;
  PaginationFirst: typeof PaginationFirstPage;
  PaginationItem: typeof PaginationItemPage;
  PaginationLast: typeof PaginationLastPage;
  PaginationNext: typeof PaginationNextPage;
  PaginationPrevious: typeof PaginationPreviousPage;
  Popup: typeof PopupPage;
  Progress: typeof ProgressPage;
  ProgressBar: typeof ProgressBarPage;
  ProgressSpinner: typeof ProgressSpinnerPage;
  ProgressText: typeof ProgressTextPage;
  Responsive: typeof ResponsivePage;
  Row: typeof RowPage;
  Tab: typeof TabPage;
  Tabs: typeof TabsPage;
  Table: typeof TablePage;
  TableTd: typeof TableTdPage;
  TableTh: typeof TableThPage;
  TableTr: typeof TableTrPage;
  Text: typeof TextPage;
}

const Pages = PagesParent as unknown as Pages;
Pages.Accordion = AccordionPage;
Pages.AccordionBody = AccordionBodyPage;
Pages.AccordionHeader = AccordionHeaderPage;
Pages.AccordionItem = AccordionItemPage;
Pages.AccordionTitle = AccordionTitlePage;
Pages.AccordionToggle = AccordionTogglePage;

Pages.Alert = AlertPage;

Pages.Animation = AnimationPage;
Pages.AnimationFadeIn = AnimationFadeInPage;

Pages.Button = ButtonPage;
Pages.CloseButton = CloseButtonPage;

Pages.Calendar = CalendarPage;
Pages.CalendarDay = CalendarDayPage;
Pages.CalendarDays = CalendarDaysPage;
Pages.CalendarHeader = CalendarHeaderPage;
Pages.CalendarLeft = CalendarLeftPage;
Pages.CalendarRight = CalendarRightPage;
Pages.CalendarTitle = CalendarTitlePage;
Pages.CalendarWeekday = CalendarWeekdayPage;
Pages.CalendarWeekdays = CalendarWeekdaysPage;

Pages.Card = CardPage;
Pages.CardBody = CardBodyPage;
Pages.CardHeader = CardHeaderPage;
Pages.CardSubtitle = CardSubtitlePage;
Pages.CardTitle = CardTitlePage;

Pages.Center = CenterPage;

Pages.Col = ColPage;

Pages.Div = DivPage;

Pages.Drawer = DrawerPage;
Pages.DrawerBody = DrawerBodyPage;
Pages.DrawerHeader = DrawerHeaderPage;
Pages.DrawerToggle = DrawerTogglePage;

Pages.Home = HomePage;

Pages.Form = FormPage;
Pages.FormButton = FormButtonPage;
Pages.FormInput = FormInputPage;
Pages.FormLabel = FormLabelPage;

Pages.Input = InputPage;
Pages.InputCheckbox = InputCheckboxPage;
Pages.InputJson = InputJsonPage;
Pages.InputRadio = InputRadioPage;
Pages.InputSearch = InputSearchPage;
Pages.InputSelect = InputSelectPage;
Pages.InputSwitch = InputSwitchPage;
Pages.InputDate = InputDatePage;
Pages.InputNumber = InputNumberPage;
Pages.InputText = InputTextPage;
Pages.InputTextArea = InputTextAreaPage;

Pages.Installation = InstallationPage;

Pages.Link = LinkPage;

Pages.Menu = MenuPage;
Pages.MenuItem = MenuItemPage;
Pages.MenuToggle = MenuTogglePage;

Pages.Modal = ModalPage;
Pages.ModalBody = ModalBodyPage;
Pages.ModalFooter = ModalFooterPage;
Pages.ModalHeader = ModalHeaderPage;
Pages.ModalTitle = ModalTitlePage;

Pages.Pagination = PaginationPage;
Pages.PaginationFirst = PaginationFirstPage;
Pages.PaginationItem = PaginationItemPage;
Pages.PaginationLast = PaginationLastPage;
Pages.PaginationNext = PaginationNextPage;
Pages.PaginationPrevious = PaginationPreviousPage;
Pages.Popup = PopupPage;

Pages.Progress = ProgressPage;
Pages.ProgressBar = ProgressBarPage;
Pages.ProgressSpinner = ProgressSpinnerPage;
Pages.ProgressText = ProgressTextPage;

Pages.Responsive = ResponsivePage;

Pages.Row = RowPage;

Pages.Tab = TabPage;
Pages.Tabs = TabsPage;

Pages.Table = TablePage;
Pages.TableTd = TableTdPage;
Pages.TableTh = TableThPage;
Pages.TableTr = TableTrPage;

Pages.Text = TextPage;

export default Pages;
