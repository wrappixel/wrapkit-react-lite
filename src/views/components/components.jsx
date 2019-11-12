import React from "react";
import PropTypes from "prop-types";



// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import Buttons from "./sections/buttons.jsx";
import Labels from "./sections/labels.jsx";
import Pagination from "./sections/pagination.jsx";
import Images from "./sections/images.jsx";
import Breadcrumbs from "./sections/breadcrumbs.jsx";
import Cards from "./sections/cards.jsx";
import Dropdowns from "./sections/dropdowns.jsx";
import Form from "./sections/form.jsx";
import Table from "./sections/table.jsx";
import Notification from "./sections/notification.jsx";
import TooltipPopover from "./sections/tooltip-popover.jsx";
import Typography from "./sections/typography.jsx";
import JsComponents from "./sections/js-components.jsx";
import CallToAction from "../../components/call-to-action/CallToAction"


class Components extends React.Component {


  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <div className="page-wrapper">
          <div className="container-fluid">
            <HeaderBanner />
            <Buttons />
            <Labels />
            <Pagination />
            <Images />
            <Breadcrumbs />
            <Cards />
            <Dropdowns />
            <Form />
            <Table />
            <Notification />
            <TooltipPopover />
            <Typography />
            <JsComponents />
            <CallToAction />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Components.propTypes = {
  classes: PropTypes.object
};

export default Components;
