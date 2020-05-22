import React from "react";
import _pt from "prop-types";

const withIcon = (name) => (IconComponent) => {
  const Icon = ({
    accessibilityLabel,
    decorative,
    flip,
    flipVertical,
    size,
    width,
    height,
    color,
    inline,
    ...restProps,
  }) => {
    const props = {
        focusable: "false",
        role: decorative ? "presentation" : "img",
        style: {
          height: height ? height : size,
          width: width ? width : size,
          display: inline ? "inline" : "block",
          fill: color,
          transform:
            flip || flipVertical
              ? `scale(${flip ? -1 : 1}, ${flipVertical ? -1 : 1})`
              : "scale(1)",
          transition: "transform 300ms ease-out",
        },
        ...restProps,
      };
  
      if ("production" !== process.env.NODE_ENV) {
        if (!accessibilityLabel && !decorative) {
          console.error(
            "Missing `accessibilityLabel` or `decorative` for accessibility.",
          );
        }
  
        if (accessibilityLabel && decorative) {
          console.error(
            "Only one of `accessibilityLabel` or `decorative` may be used.",
          );
        }
      }
  
      if (decorative) {
        props["aria-hidden"] = true;
      }
  
      if (accessibilityLabel) {
        props["aria-label"] = accessibilityLabel;
      }
  
      return React.createElement(IconComponent, props);
    };
  
    Icon.propTypes = {
      accessibilityLabel: _pt.string,
      decorative: _pt.bool,
      flip: _pt.bool,
      flipVertical: _pt.bool,
      size: _pt.oneOfType([_pt.number, _pt.string]),
      width: _pt.oneOfType([_pt.number, _pt.string]),
      height: _pt.oneOfType([_pt.number, _pt.string]),
      color: _pt.string,
      inline: _pt.bool,
    };
  
    Icon.defaultProps = {
      accessibilityLabel: null,
      color: "currentColor",
      decorative: false,
      flip: false,
      flipVertical: false,
      height: null,
      inline: false,
      size: "1rem",
      width: null,
    };
  
    Icon.displayName = name;
    Icon.IconComponent = IconComponent;
  
    return Icon;
};

export default withIcon;
