'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

export function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(60000);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  // Calculations
  const hourlyRate = avgSalary / 2080; // 2080 work hours per year
  const weeklyWaste = employees * hoursPerWeek * hourlyRate;
  const annualWaste = weeklyWaste * 52;
  const aiSavings = annualWaste * 0.6; // 60% reduction
  const implementationCost = 45000; // Quick-win package
  const netSavings = aiSavings - implementationCost;
  const roiMultiple = aiSavings / implementationCost;

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Calculate Your AI ROI
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See how much your business could save by automating repetitive tasks with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Inputs */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Your Business Metrics
              </h3>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary-600" />
                    Number of Employees
                  </label>
                  <Input
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    min="1"
                    max="1000"
                    className="text-lg font-semibold"
                  />
                  <input
                    type="range"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    min="1"
                    max="500"
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary-600" />
                    Average Annual Salary
                  </label>
                  <Input
                    type="number"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    min="30000"
                    max="200000"
                    step="1000"
                    className="text-lg font-semibold"
                  />
                  <input
                    type="range"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    min="30000"
                    max="150000"
                    step="1000"
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary-600" />
                    Hours Spent on Repetitive Tasks (per employee/week)
                  </label>
                  <Input
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    min="1"
                    max="40"
                    className="text-lg font-semibold"
                  />
                  <input
                    type="range"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    min="1"
                    max="40"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-success/10 to-white p-8 rounded-2xl border-2 border-success/30">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-success" />
                Your Potential Savings
              </h3>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <p className="text-sm text-neutral-600 mb-2">Current Annual Waste</p>
                  <p className="text-4xl font-bold text-error">
                    ${annualWaste.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Time spent on repetitive tasks
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-success/20 to-success/5 rounded-xl border border-success/30">
                  <p className="text-sm text-neutral-700 font-semibold mb-2">
                    Annual Savings with AI
                  </p>
                  <p className="text-5xl font-bold text-success">
                    ${aiSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-xs text-neutral-600 mt-1">
                    60% reduction in repetitive tasks
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                    <p className="text-xs text-neutral-600 mb-1">Implementation</p>
                    <p className="text-2xl font-bold text-neutral-900">
                      ${implementationCost.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                    <p className="text-xs text-neutral-600 mb-1">First Year ROI</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {roiMultiple.toFixed(1)}x
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white text-center">
                  <p className="text-sm mb-2 text-primary-100">Net Savings (Year 1)</p>
                  <p className="text-4xl font-bold">
                    ${netSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-xs mt-2 text-primary-100">
                    After implementation costs
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full" asChild>
              <a href="#booking">
                Schedule Free Call to Discuss Your ROI
              </a>
            </Button>

            <p className="text-xs text-neutral-500 text-center">
              * Calculations are estimates based on industry averages. Actual results may vary based on your specific implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

