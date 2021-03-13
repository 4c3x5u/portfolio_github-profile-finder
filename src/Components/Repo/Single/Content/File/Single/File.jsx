import React from "react";
import PropTypes from "prop-types";
import FileContent from "./Content/FileContent";
import Section from "../../../../../Shared/Section/Section";
import { getFile } from "../../../../../../API/fileAPI";

const File = ({ url }) => (
  <Section
    name="File"
    get={getFile(url)}
    view={(content) => <FileContent content={content} />}
  />
);

File.propTypes = {
  url: PropTypes.string.isRequired,
};

export default File;
