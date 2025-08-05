import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Address {
  postalCode: string;
  street: string;
  externalNumber?: string;
  internalNumber?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  isDefault?: boolean;
}

export interface DeliveryOption {
  id: string;
  name: string;
  description: string;
  estimatedDays: number;
  cost: number;
  available: boolean;
  estimatedDeliveryDate?: string;
}

export interface MSIOption {
  id: string;
  months: number;
  monthlyPayment: number;
  totalAmount: number;
  interestRate: number;
  available: boolean;
  description: string;
}

export const DeliveryDatesService = {
  /**
   * Calcula las fechas de entrega disponibles basándose en:
   * - Fecha actual
   * - Ubicación de envío
   * - Tipo de envío seleccionado
   */
  calculateDeliveryOptions(
    shippingAddress: Address,
    orderDate: Date = new Date()
  ): DeliveryOption[] {
    const options: DeliveryOption[] = [
      {
        id: "express",
        name: "Envío Express",
        description: "Entre el miércoles y el jueves",
        estimatedDays: 2,
        cost: 150,
        available: true,
        estimatedDeliveryDate: this.calculateEstimatedDeliveryDate(orderDate, 2)
      },
      {
        id: "standard",
        name: "Envío Estándar", 
        description: "Entre el 3 y el 5 de julio, en dos semanas",
        estimatedDays: 14,
        cost: 90,
        available: true,
        estimatedDeliveryDate: this.calculateEstimatedDeliveryDate(orderDate, 14)
      },
      {
        id: "free",
        name: "Envío Gratuito",
        description: "Entre el 8 y el 12 de julio",
        estimatedDays: 21,
        cost: 0,
        available: true,
        estimatedDeliveryDate: this.calculateEstimatedDeliveryDate(orderDate, 21)
      }
    ];

    return options;
  },

  /**
   * Calcula la fecha estimada de entrega
   */
  calculateEstimatedDeliveryDate(
    orderDate: Date,
    estimatedDays: number
  ): string {
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + estimatedDays);
    
    // Ajustar para días laborales (excluir fines de semana)
    while (deliveryDate.getDay() === 0 || deliveryDate.getDay() === 6) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
    }
    
    return deliveryDate.toISOString().split('T')[0]; // Retorna solo la fecha en formato YYYY-MM-DD
  },

  /**
   * Obtiene las opciones de entrega desde el backend
   */
  async getDeliveryOptions(shippingAddress: Address): Promise<DeliveryOption[]> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No se encontró token de autenticación');
    }

    try {
      const response = await axios.post(`${API_URL}/orders/delivery-options`, {
        shippingAddress
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      return response.data.deliveryOptions;
    } catch {
      // Si el endpoint no existe, usar cálculo local
      console.warn('Endpoint de opciones de entrega del backend no disponible, usando cálculo local');
      return this.calculateDeliveryOptions(shippingAddress);
    }
  },

  /**
   * Formatea la fecha para mostrar de manera amigable
   */
  formatDeliveryDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return date.toLocaleDateString('es-ES', options);
  },

  /**
   * Obtiene el rango de fechas de entrega (ej: "Entre el 3 y el 5 de julio")
   */
  getDeliveryRange(estimatedDays: number, orderDate: Date = new Date()): string {
    const startDate = new Date(orderDate);
    startDate.setDate(startDate.getDate() + estimatedDays);
    
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 2); // Agregar 2 días para el rango
    
    const startFormatted = startDate.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long' 
    });
    const endFormatted = endDate.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'long' 
    });
    
    return `Entre el ${startFormatted} y el ${endFormatted}`;
  }
};

export const MSIService = {
  /**
   * Calcula las opciones de MSI disponibles basándose en:
   * - Monto total de la compra
   * - Tipo de tarjeta (crédito/débito)
   * - Banco emisor
   */
  calculateMSIOptions(
    totalAmount: number,
    cardType: "credit_card" | "debit_card" = "credit_card"
  ): MSIOption[] {
    // Solo tarjetas de crédito tienen MSI
    if (cardType === "debit_card") {
      return [
        {
          id: "single",
          months: 1,
          monthlyPayment: totalAmount,
          totalAmount: totalAmount,
          interestRate: 0,
          available: true,
          description: "Pago único"
        }
      ];
    }

    // Opciones de MSI para tarjetas de crédito
    const options: MSIOption[] = [
      {
        id: "single",
        months: 1,
        monthlyPayment: totalAmount,
        totalAmount: totalAmount,
        interestRate: 0,
        available: true,
        description: "Pago único"
      }
    ];

    // Agregar opciones de MSI según el monto
    if (totalAmount >= 300) {
      options.push({
        id: "msi_3",
        months: 3,
        monthlyPayment: Math.ceil(totalAmount / 3),
        totalAmount: totalAmount,
        interestRate: 0,
        available: true,
        description: "3 Meses Sin Intereses"
      });
    }

    if (totalAmount >= 600) {
      options.push({
        id: "msi_6",
        months: 6,
        monthlyPayment: Math.ceil(totalAmount / 6),
        totalAmount: totalAmount,
        interestRate: 0,
        available: true,
        description: "6 Meses Sin Intereses"
      });
    }

    if (totalAmount >= 1200) {
      options.push({
        id: "msi_12",
        months: 12,
        monthlyPayment: Math.ceil(totalAmount / 12),
        totalAmount: totalAmount,
        interestRate: 0,
        available: true,
        description: "12 Meses Sin Intereses"
      });
    }

    // Opciones con interés para montos más altos
    if (totalAmount >= 2400) {
      options.push({
        id: "msi_18",
        months: 18,
        monthlyPayment: Math.ceil(totalAmount * 1.15 / 18), // 15% de interés
        totalAmount: totalAmount * 1.15,
        interestRate: 15,
        available: true,
        description: "18 meses con 15% de interés"
      });
    }

    return options;
  },

  /**
   * Obtiene las opciones de MSI desde el backend
   */
  async getMSIOptions(
    totalAmount: number,
    cardType: "credit_card" | "debit_card" = "credit_card",
    bankProvider?: string
  ): Promise<MSIOption[]> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No se encontró token de autenticación');
    }

    try {
      const response = await axios.post(`${API_URL}/orders/msi-options`, {
        totalAmount,
        cardType,
        bankProvider
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      return response.data.msiOptions;
    } catch {
      // Si el endpoint no existe, usar cálculo local
      console.warn('Endpoint de opciones MSI del backend no disponible, usando cálculo local');
      return this.calculateMSIOptions(totalAmount, cardType);
    }
  },

  /**
   * Formatea el pago mensual para mostrar
   */
  formatMonthlyPayment(amount: number): string {
    return `$${amount.toLocaleString()}`;
  },

  /**
   * Formatea la descripción del plan
   */
  formatPlanDescription(option: MSIOption): string {
    if (option.months === 1) {
      return `${option.months} x ${this.formatMonthlyPayment(option.monthlyPayment)}`;
    }
    
    if (option.interestRate === 0) {
      return `${option.months} x ${this.formatMonthlyPayment(option.monthlyPayment)} MSI`;
    }
    
    return `${option.months} x ${this.formatMonthlyPayment(option.monthlyPayment)}`;
  },

  /**
   * Calcula la fecha de cada pago mensual
   */
  calculatePaymentDates(months: number, startDate: Date = new Date()): Date[] {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < months; i++) {
      const paymentDate = new Date(currentDate);
      paymentDate.setMonth(paymentDate.getMonth() + i);
      dates.push(paymentDate);
    }
    
    return dates;
  }
};

