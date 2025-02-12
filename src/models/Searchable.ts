export type Searchable<TSearchableEndpoint extends SearchableEndpoint> = SearchableMap[TSearchableEndpoint]

interface SearchableMap {
'AdminAddresses.List': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'AdminUsers.List': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'ApiClients.List': ('ID' | 'AppName' | 'DefaultContextUserName')[]
'Buyers.List': ('Name' | 'ID')[]
'Addresses.List': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'ApprovalRules.List': ('ID' | 'Name' | 'Description' | 'RuleExpression')[]
'CostCenters.List': ('ID' | 'Name' | 'Description')[]
'CreditCards.List': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate')[]
'SpendingAccounts.List': ('ID' | 'Name' | 'RedemptionCode')[]
'UserGroups.List': ('ID' | 'Name' | 'Description')[]
'Users.List': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'Catalogs.List': ('ID' | 'Name' | 'Description')[]
'Categories.List': ('ID' | 'Name' | 'Description')[]
'ImpersonationConfigs.List': ('ImpersonationBuyerID' | 'ImpersonationGroupID' | 'ImpersonationUserID' | 'BuyerID' | 'GroupID' | 'UserID' | 'SecurityProfileID' | 'ClientID' | 'ID')[]
'Incrementors.List': ('ID' | 'Name')[]
'IntegrationEvents.List': ('ID' | 'EventType' | 'Name')[]
'Locales.List': ('ID' | 'Currency')[]
'Me.ListAddresses': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'Me.ListCatalogs': ('ID' | 'Name' | 'Description')[]
'Me.ListCategories': ('ID' | 'Name' | 'Description')[]
'Me.ListCostCenters': ('ID' | 'Name' | 'Description')[]
'Me.ListCreditCards': ('ID' | 'CardholderName' | 'CardType' | 'ExpirationDate')[]
'Me.ListOrders': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[]
'Me.ListApprovableOrders': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[]
'Me.ListProducts': string[]
'Me.ListSpecs': ('ID' | 'Name' | 'Description')[]
'Me.ListVariants': ('ID' | 'Name' | 'Description')[]
'Me.ListPromotions': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'Me.ListBuyerSellers': ('ID' | 'Name')[]
'Me.ListShipments': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'Me.ListShipmentItems': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'Me.ListSpendingAccounts': ('ID' | 'Name' | 'RedemptionCode')[]
'Me.ListUserGroups': ('ID' | 'Name' | 'Description')[]
'MessageSenders.List': ('ID' | 'Name' | 'URL')[]
'MessageSenders.ListCCListenerAssignments': ('BuyerID' | 'UserGroupID' | 'UserID' | 'MessageConfigName' | 'SupplierID')[]
'OpenIdConnects.List': ('ID')[]
'Orders.List': ('ID' | 'FromCompanyID' | 'ToCompanyID' | 'Comments')[]
'Orders.ListApprovals': ('ApprovalRuleID' | 'ApprovingGroupID' | 'Approver' | 'Comments')[]
'Orders.ListEligibleApprovers': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'LineItems.List': ('ID' | 'ProductID')[]
'Payments.List': ('ID' | 'Description')[]
'Orders.ListPromotions': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'Orders.ListShipments': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'PriceSchedules.List': ('ID' | 'Name' | 'ApplyTax' | 'Currency')[]
'ProductFacets.List': ('ID' | 'Name' | 'XpPath')[]
'Products.List': string[]
'Products.ListSpecs': ('Name' | 'ID')[]
'Products.ListSuppliers': ('Name' | 'ID')[]
'Products.ListVariants': ('ID' | 'Name' | 'Description')[]
'Promotions.List': ('ID' | 'Name' | 'Code' | 'Description' | 'FinePrint' | 'EligibleExpression' | 'ValueExpression')[]
'SecurityProfiles.List': ('ID' | 'Name')[]
'Shipments.List': ('ID' | 'BuyerID' | 'Shipper' | 'DateShipped' | 'DateDelivered' | 'TrackingNumber')[]
'Shipments.ListItems': []
'Specs.List': ('Name' | 'ID')[]
'Specs.ListOptions': ('Value' | 'ID')[]
'Specs.ListProductAssignments': ('SpecID' | 'ProductID')[]
'Suppliers.List': ('Name' | 'ID')[]
'SupplierAddresses.List': ('ID' | 'AddressName' | 'CompanyName' | 'City' | 'Street1' | 'Street2' | 'LastName' | 'FirstName' | 'State' | 'Zip')[]
'Suppliers.ListBuyers': ('ID' | 'Name')[]
'SupplierUserGroups.List': ('ID' | 'Name' | 'Description')[]
'SupplierUsers.List': ('ID' | 'Username' | 'LastName' | 'FirstName' | 'Email')[]
'AdminUserGroups.List': ('ID' | 'Name' | 'Description')[]
'Webhooks.List': ('ID' | 'Name' | 'Description' | 'Url')[]
'XpIndices.List': ('ThingType' | 'Key')[]
}

type SearchableEndpoint = 'AdminAddresses.List' | 
'AdminUsers.List' | 
'ApiClients.List' | 
'Buyers.List' | 
'Addresses.List' | 
'ApprovalRules.List' | 
'CostCenters.List' | 
'CreditCards.List' | 
'SpendingAccounts.List' | 
'UserGroups.List' | 
'Users.List' | 
'Catalogs.List' | 
'Categories.List' | 
'ImpersonationConfigs.List' | 
'Incrementors.List' | 
'IntegrationEvents.List' | 
'Locales.List' | 
'Me.ListAddresses' | 
'Me.ListCatalogs' | 
'Me.ListCategories' | 
'Me.ListCostCenters' | 
'Me.ListCreditCards' | 
'Me.ListOrders' | 
'Me.ListApprovableOrders' | 
'Me.ListProducts' | 
'Me.ListSpecs' | 
'Me.ListVariants' | 
'Me.ListPromotions' | 
'Me.ListBuyerSellers' | 
'Me.ListShipments' | 
'Me.ListShipmentItems' | 
'Me.ListSpendingAccounts' | 
'Me.ListUserGroups' | 
'MessageSenders.List' | 
'MessageSenders.ListCCListenerAssignments' | 
'OpenIdConnects.List' | 
'Orders.List' | 
'Orders.ListApprovals' | 
'Orders.ListEligibleApprovers' | 
'LineItems.List' | 
'Payments.List' | 
'Orders.ListPromotions' | 
'Orders.ListShipments' | 
'PriceSchedules.List' | 
'ProductFacets.List' | 
'Products.List' | 
'Products.ListSpecs' | 
'Products.ListSuppliers' | 
'Products.ListVariants' | 
'Promotions.List' | 
'SecurityProfiles.List' | 
'Shipments.List' | 
'Shipments.ListItems' | 
'Specs.List' | 
'Specs.ListOptions' | 
'Specs.ListProductAssignments' | 
'Suppliers.List' | 
'SupplierAddresses.List' | 
'Suppliers.ListBuyers' | 
'SupplierUserGroups.List' | 
'SupplierUsers.List' | 
'AdminUserGroups.List' | 
'Webhooks.List' | 
'XpIndices.List'
