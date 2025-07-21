import React, { JSX } from "react";

type HtmlTags = keyof JSX.IntrinsicElements;

type GetHtmlProps<T extends HtmlTags> = React.ComponentPropsWithoutRef<T>;

type TypographyProps<T extends HtmlTags = "p"> = {
    as?: T;
    className?: string;
    children: React.ReactNode;
} & GetHtmlProps<T>;

type BaseTextProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const BaseText = <T extends React.ElementType = "span">({
    as,
    className = "",
    children,
    ...props
}: BaseTextProps<T>) => {
    const Component = as || "span";
    return React.createElement(Component, { className, ...props }, children);
};

export const Display = <T extends HtmlTags = "div">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "div") as T | "div"; 
    return (
        <BaseText as={Component} className={`text-display ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};

export const H1 = <T extends HtmlTags = "h1">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "h1") as T | "h1";
    return (
        <BaseText as={Component} className={`text-h1 ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};

export const H2 = <T extends HtmlTags = "h2">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "h2") as T | "h2";
    return (
        <BaseText as={Component} className={`text-h2 ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};

export const H3 = <T extends HtmlTags = "h3">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "h3") as T | "h3";
    return (
        <BaseText as={Component} className={`text-h3 ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};

export const Subtitle = <T extends HtmlTags = "h4">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "h4") as T | "h4";
    return (
        <BaseText as={Component} className={`text-subtitle ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};

export const Body = <T extends HtmlTags = "p">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "p") as T | "p";
    return (
        <BaseText as={Component} className={`text-body ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};

export const BodySmall = <T extends HtmlTags = "small">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "small") as T | "small";
    return (
        <BaseText as={Component} className={`text-body-sm ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};

export const Caption = <T extends HtmlTags = "span">({
    as,
    className = "",
    children,
    ...rest
}: TypographyProps<T>) => {
    const Component = (as || "span") as T | "span";
    return (
        <BaseText as={Component} className={`text-caption ${className}`} {...(rest as GetHtmlProps<T>)}>
            {children}
        </BaseText>
    );
};