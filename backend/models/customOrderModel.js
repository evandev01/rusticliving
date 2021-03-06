import mongoose from 'mongoose'

const customOrderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    customOrderItems: [
      {
        productName: { type: String, required: true },
        size: {
          length: { type: Number, required: true },
          width: { type: Number, required: true },
        },
        speciesName: { type: String, required: true },
        speciesSizeTotalPrice: { type: Number, required: true, default: 0.0 },
        baseName: { type: String, required: true },
        baseTotalPrice: { type: Number, required: true, default: 0.0 },
        accentName: { type: String, required: true },
        accentPricePerUnit: { type: Number, required: true, default: 0.0 },
        accentTotalPrice: { type: Number, required: true, default: 0.0 },
        stainName: { type: String, required: true },
        stainTotalPrice: { type: Number, required: true, default: 0.0 },
        paintName: { type: String, required: true },
        paintTotalPrice: { type: Number, required: true, default: 0.0 },
        qty: { type: Number, required: false },
        subtotalPrice: { type: Number, required: true, default: 0.0 },
        totalPrice: { type: Number, required: true, default: 0.0 },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const CustomOrder = mongoose.model('CustomOrder', customOrderSchema)

export default CustomOrder
