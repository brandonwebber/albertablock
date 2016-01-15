<?php if(!defined('KIRBY')) exit ?>

title: Tenant
pages: false
files:
  sortable: true
fields:
  name:
    label: Name
    type:  text
  publicemail:
    label: Public Email
    type:  email
  publicphone:
    label: Public Phone
    type:  tel
  contactemail:
    label: Contact Email
    type:  email
  contactphone:
    label: Contact Phone
    type:  tel
  description:
    label: Description
    type:  textarea
  location:
    label: Location
    type:  text
  floor:
    label: Floor
    type:  select
    options:
      main: Main
      second: Second
      third: Third
      fourth: Fourth
      fifth: Fifth
      sixth: Sixth
