# File Architecture

```
root
|
+-- package.json
| 
+-- node_modules/
|
+-- public/
  |
  +-- img/
|
+-- src
  |
  +-- assets/
  |
  +-- components/
    |
    +-- Nav.vue
    |
    +-- Modal.vue
    |
    +-- Badge.vue
    |
    +-- Vendor.vue
    |
    +-- VendorInfo.vue
  |
  +-- views/
    |
    +-- Map.vue
    |
    +-- Profile.vue
    |
    +-- Vendors.vue
  |
  +-- App.vue
  |
  +-- main.js
  |
  +-- router.js
```

With the file architecture, we wanted to distinguish between what is a component and what is a view in the app. Each view corresponded with each of the three pages that we designed. The repeating parts of each page were then modularized into components. For example, the vendor view shows all of the vendors (repeating components) and vendor modals on click (another component that can be repeated using different props). We can thus recycle these components without having to rewrite code.