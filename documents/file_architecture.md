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
    +-- Category.vue
    |
    +-- InventoryItem.vue
    |
    +-- Item.vue
    |
    +-- Vendor.vue
    |
    +-- Note.vue
  |
  +-- views/
    |
    +-- Home.vue
    |
    +-- Inventory.vue
    |
    +-- Vendors.vue
    |
    +-- Notes.vue
    |
    +-- UpdateInventory.vue
  |
  +-- App.vue
  |
  +-- main.js
  |
  +-- router.js
```

With the file architecture, we wanted to distinguish between what is a component and what is a view in the app. Each view corresponded with each of the five pages that we designed. The repeating parts of each page were then modularized into components. For example, the inventory view allows the user to select a category, which shows a view of all inventory items in the category, and when hey click on an item, they see the specific item view listing the vendors that sell this item. We can thus repeatedly use these components without having to rewrite code.