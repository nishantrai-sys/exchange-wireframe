'use strict';

var orderDetails = {
  orderId: 'O268moP8',
  amount: 14887,
  orderDate: '13 Aug 2026 at 6:06AM',
  orderingStore: 'Android app',
  orderStatus: 'PAYMENTCONFIRMED',
  paymentMode: 'UPI'
};

var ordersPageOrderDetails = {
  orderId: 'AJ26xu475',
  amount: 2086,
  orderDate: '10 Aug 2026 at 9:05AM',
  orderingStore: 'xyz',
  orderStatus: 'RETURNED',
  paymentMode: 'PAID_AT_SOURCE',
  orderType: 'HIH Exchange',
  parentOrderId: 'AJ26xu470'
};

var orderSummaryKv = [
  { label: 'Total Price', value: '0' },
  { label: 'Promotion Applied', value: '-' },
  { label: 'Discount', value: '2654' },
  { label: 'Tax', value: '99.33' },
  { label: 'GST Benefit', value: '0' },
  { label: 'Shipping Charge', value: '0' },
  { label: 'Payments', value: 'PAID_AT_SOURCE - 2086,' },
  { label: 'Total Payable', value: '2086' }
];

var lineItemPayments = [
  {
    consignmentId: 'C26xu47501',
    styleId: 'JJ2G7G8MOOP, EAN:8909285533208, SAP Id: UDJEN1867',
    size: '36',
    brand: 'U.S. Polo Assn. Denim Co. Brandon Slim Tapered Fit Jeans',
    price: 4740,
    discount: 2654,
    gstBenefit: 0,
    finalPrice: 2086,
    status: 'RETURNED'
  }
];

var consignmentDetails = [
  {
    id: 'C26xu47501',
    deliveryMode: 'standard',
    deliveryAddress: '-',
    status: 'RETURNED',
    fullfillingStore: 'U.S. Polo Assn. Vasai',
    logisticsPartner: 'XPRESSBEES',
    trackingLink: '-',
    dateOfDelivery: '12 Aug 2026 at 3:05PM'
  }
];

var ineligibleItems = [
  {
    name: 'Multi Solid Low Rise Trunks',
    size: 'M',
    deliveryMode: 'Standard Delivery',
    status: 'ASSIGNED',
    reason: 'Item not yet delivered'
  },
  {
    name: 'Striped Relaxed Fit Cotton Polo T-Shirt',
    size: 'M',
    deliveryMode: 'Standard Delivery',
    status: 'ASSIGNED',
    reason: 'Item not yet delivered'
  },
  {
    name: 'Solid Round Neck Cotton T-Shirt',
    size: 'M',
    deliveryMode: 'Standard Delivery',
    status: 'SHIPPED',
    reason: 'Item not yet delivered'
  },
  {
    name: 'Solid Round Neck Cotton T-Shirt',
    size: 'L',
    deliveryMode: 'Standard Delivery',
    status: 'SHIPPED',
    reason: 'Item not yet delivered'
  },
  {
    name: 'Solid Round Neck Cotton T-Shirt',
    size: 'XL',
    deliveryMode: 'Standard Delivery',
    status: 'PACKED',
    reason: 'Item not yet delivered'
  },
  {
    name: 'Solid Round Neck Cotton T-Shirt',
    size: 'XXL',
    deliveryMode: 'Standard Delivery',
    status: 'PACKED',
    reason: 'Item not yet delivered'
  }
];

var eligibleExchangeItems = [
  {
    name: 'Printed Slim Fit Cotton T-Shirt',
    size: 'L',
    deliveryMode: 'Standard Delivery',
    status: 'DELIVERED'
  },
  {
    name: 'Checked Casual Shirt',
    size: 'M',
    deliveryMode: 'Standard Delivery',
    status: 'DELIVERED'
  }
];

var exchangeReasons = [
  'Wrong size received',
  'Defective product',
  'Color mismatch',
  'Quality issue'
];

var sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

var exchangeModes = ['Reverse Pickup', 'Store Walk In'];

// Each entry represents one item being exchanged: a return leg (old item
// going back) and a forward leg (new item going out), shown as a clubbed
// pair of rows so agents can see both halves of the exchange together.
var wipExchangeGroups = [
  {
    returnLeg: {
      id: 'R26e10a1',
      product: 'Printed Slim Fit Cotton T-Shirt (Size L)',
      mode: 'SELFSHIP',
      status: 'RET_QC_PASS',
      hasError: true,
      reason: 'Wrong size received',
      location: 'View Address',
      validDate: '16 Aug 2026',
      logisticsPartner: '-',
      trackingLink: '-'
    },
    forwardLeg: {
      id: 'F26e10b1',
      product: 'Printed Slim Fit Cotton T-Shirt (Size M)',
      mode: 'FORWARD',
      status: 'ORDER_CONFIRMED',
      hasError: false,
      reason: '-',
      location: 'View Address',
      validDate: '18 Aug 2026',
      logisticsPartner: 'Delhivery',
      trackingLink: 'Track'
    }
  },
  {
    returnLeg: {
      id: 'R26e10c2',
      product: 'Checked Casual Shirt (Size M)',
      mode: 'REVERSE PICKUP',
      status: 'RET_INITIATED',
      hasError: false,
      reason: 'Defective product',
      location: 'View Address',
      validDate: '19 Aug 2026',
      logisticsPartner: '-',
      trackingLink: '-'
    },
    forwardLeg: {
      id: 'F26e10d2',
      product: 'Checked Casual Shirt (Size L)',
      mode: 'FORWARD',
      status: 'PACKED',
      hasError: false,
      reason: '-',
      location: 'View Address',
      validDate: '20 Aug 2026',
      logisticsPartner: 'Ekart',
      trackingLink: 'Track'
    }
  }
];

function renderOrderSummary(containerId, data) {
  var container = document.getElementById(containerId);
  var html =
    '<div class="summary-field"><div class="label">Order Id:</div><div class="value">' + data.orderId + '</div></div>' +
    '<div class="summary-field"><div class="label">Amount:</div><div class="value">' + data.amount + '</div></div>' +
    '<div class="summary-field"><div class="label">Order Date:</div><div class="value">' + data.orderDate + '</div></div>' +
    '<div class="summary-field"><div class="label">Ordering Store:</div><div class="value">' + data.orderingStore + '</div></div>' +
    '<div class="summary-field"><div class="label">Order Status:</div><div class="value">' + data.orderStatus + '</div></div>' +
    '<div class="summary-field"><div class="label">Payment Mode:</div><div class="value">' + data.paymentMode + '</div></div>';

  if (data.orderType) {
    html += '<div class="summary-field"><div class="label">Order Type:</div><div class="value">' + data.orderType + '</div></div>';
  }
  if (data.parentOrderId) {
    html += '<div class="summary-field"><div class="label">Parent Order Id:</div><div class="value">' + data.parentOrderId + '</div></div>';
  }

  container.innerHTML = html;
}

function renderOrderSummaryKv() {
  var tbody = document.querySelector('#orders-summary-table tbody');
  tbody.innerHTML = orderSummaryKv.map(function(row) {
    return '<tr><td>' + row.label + '</td><td>' + row.value + '</td></tr>';
  }).join('');
}

function renderLineItemPayments() {
  var tbody = document.getElementById('orders-line-items-body');
  tbody.innerHTML = lineItemPayments.map(function(item) {
    return '<tr>' +
      '<td>' + item.consignmentId + '</td>' +
      '<td>' + item.styleId + '</td>' +
      '<td>' + item.size + '</td>' +
      '<td>' + item.brand + '</td>' +
      '<td>' + item.price + '</td>' +
      '<td>' + item.discount + '</td>' +
      '<td>' + item.gstBenefit + '</td>' +
      '<td>' + item.finalPrice + '</td>' +
      '<td>' + item.status + '</td>' +
      '</tr>';
  }).join('');
}

function renderConsignmentDetails() {
  var tbody = document.getElementById('orders-consignment-body');
  tbody.innerHTML = consignmentDetails.map(function(c) {
    return '<tr>' +
      '<td><input type="radio" name="consignment"></td>' +
      '<td><a class="product-link">' + c.id + '</a></td>' +
      '<td>' + c.deliveryMode + '</td>' +
      '<td>' + c.deliveryAddress + '</td>' +
      '<td>' + c.status + '</td>' +
      '<td><button class="btn btn-teal btn-sm">Update Status</button></td>' +
      '<td>' + c.fullfillingStore + '</td>' +
      '<td><a class="product-link">Click Here</a></td>' +
      '<td>' + c.logisticsPartner + '<br><button class="btn btn-teal btn-sm">Change Courier</button></td>' +
      '<td>' + c.trackingLink + '</td>' +
      '<td>' + c.dateOfDelivery + '</td>' +
      '<td><button class="btn btn-teal btn-sm">Rollback</button></td>' +
      '</tr>';
  }).join('');
}

function renderIneligibleTable(tbodyId, inputType) {
  var tbody = document.getElementById(tbodyId);
  tbody.innerHTML = ineligibleItems.map(function(item) {
    return '<tr>' +
      '<td><input type="' + inputType + '" name="override"></td>' +
      '<td>' + item.name + '</td>' +
      '<td>' + item.size + '</td>' +
      '<td>' + item.deliveryMode + '</td>' +
      '<td>' + item.status + '</td>' +
      '<td>' + item.reason + '</td>' +
      '</tr>';
  }).join('');
}

function renderEligibleExchangeTable() {
  var tbody = document.getElementById('exchange-eligible-body');
  var reasonOptions = exchangeReasons.map(function(r) {
    return '<option value="">' + r + '</option>';
  }).join('');
  var modeOptions = exchangeModes.map(function(m) {
    return '<option value="">' + m + '</option>';
  }).join('');

  tbody.innerHTML = eligibleExchangeItems.map(function(item) {
    var sizeSelectOptions = sizeOptions.map(function(s) {
      var selected = s === item.size ? ' disabled' : '';
      return '<option value="' + s + '"' + selected + '>' + s + '</option>';
    }).join('');

    return '<tr>' +
      '<td><input type="checkbox"></td>' +
      '<td><a class="product-link">' + item.name + '</a></td>' +
      '<td>' + item.size + '</td>' +
      '<td>' + item.deliveryMode + '</td>' +
      '<td><select><option value="">-- Select --</option>' + sizeSelectOptions + '</select></td>' +
      '<td><select><option value="">-- Select --</option>' + modeOptions + '</select></td>' +
      '<td><select><option value=""></option></select></td>' +
      '<td><select><option value="">-- Select Reason --</option>' + reasonOptions + '</select></td>' +
      '<td><input type="text" placeholder=""></td>' +
      '<td><a class="product-link">Select Address</a></td>' +
      '</tr>';
  }).join('');
}

function wipLegCells(leg) {
  return '<td>' + leg.id + '</td>' +
    '<td>' + leg.product + '</td>' +
    '<td>' + leg.mode + '</td>' +
    '<td>' + leg.status + '</td>' +
    '<td>' + (leg.hasError ? '<button class="btn btn-teal btn-sm">Show Error</button>' : '-') + '</td>' +
    '<td>' + leg.reason + '</td>' +
    '<td><a class="product-link">Check Here</a></td>' +
    '<td><a class="product-link">' + leg.location + '</a></td>' +
    '<td>' + leg.validDate + '</td>' +
    '<td>' + leg.logisticsPartner + '</td>' +
    '<td>' + leg.trackingLink + '</td>';
}

function renderExchangeWipTable() {
  var tbody = document.getElementById('exchange-wip-body');

  tbody.innerHTML = wipExchangeGroups.map(function(group, idx) {
    var bandClass = idx % 2 === 0 ? 'wip-group-a' : 'wip-group-b';

    var returnRow = '<tr class="' + bandClass + ' wip-group-start">' +
      '<td rowspan="2"><input type="checkbox"></td>' +
      '<td><span class="leg-tag leg-return">Return</span></td>' +
      wipLegCells(group.returnLeg) +
      '</tr>';

    var forwardRow = '<tr class="' + bandClass + '">' +
      '<td><span class="leg-tag leg-forward">Forward</span></td>' +
      wipLegCells(group.forwardLeg) +
      '</tr>';

    return returnRow + forwardRow;
  }).join('');
}

var builtPages = ['orders', 'returns', 'exchange'];

function initNavigation() {
  var navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var page = item.getAttribute('data-page');

      navItems.forEach(function(nav) {
        nav.classList.remove('active');
      });
      item.classList.add('active');

      builtPages.forEach(function(p) {
        var pageEl = document.getElementById(p + '-page');
        if (p === page) {
          pageEl.classList.remove('hidden');
        } else {
          pageEl.classList.add('hidden');
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderOrderSummary('returns-order-summary', orderDetails);
  renderOrderSummary('exchange-order-summary', orderDetails);
  renderOrderSummary('orders-order-summary', ordersPageOrderDetails);
  renderIneligibleTable('returns-ineligible-body', 'radio');
  renderIneligibleTable('exchange-ineligible-body', 'radio');
  renderEligibleExchangeTable();
  renderExchangeWipTable();
  renderOrderSummaryKv();
  renderLineItemPayments();
  renderConsignmentDetails();
  initNavigation();
});
