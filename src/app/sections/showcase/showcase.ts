import { Component, computed, signal } from '@angular/core';

type TabId = 'dashboard' | 'workflow' | 'insights'

type showCaseItem = {
  id: TabId;
  label: string;
  title: string
  desc: string;
  stats: {
    lable: string;
    value: string;
    tag: string
  }[];
};

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
  protected tabs: showCaseItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      title: 'Unified Command Center',
      desc: 'See everything at a glance — tasks, metrics, team activity, and AI recommendations in one clean interface.',
      stats: [
        {lable: 'Active Tasks', value: "127", tag: "+12 this week"},
        {lable: 'Team Velocity', value: "94%", tag: "8% from last sprint"},
        {lable: 'AI Suggestions', value: "23", tag: "Pending review"},
      ]
    },
    {
      id: 'workflow',
      label: 'Workflows',
      title: 'Visual Workflow Builder ',
      desc: 'Design, automate, and monitor workflows with a drag-and-drop canvas powered by intelligent automation.',
      stats: [
        {lable: 'Active Flows', value: "18", tag: "3 drafts"},
        {lable: 'Time Saved', value: "42h", tag: "This month"},
        {lable: 'Automations', value: "156", tag: "Runs today"},
      ]
    },
    {
      id: 'insights',
      label: 'Insights',
      title: 'Predictive Analytics',
      desc: 'AI-powered insights that predict bottlenecks, suggest optimizations, and forecast project outcomes.',
      stats: [
        {lable: 'Predictions', value: "97%", tag: "Accuracy rate"},
        {lable: 'Risk Alerts', value: "3", tag: "Needs attention"},
        {lable: 'Saved Hours', value: "180+", tag: "Per quarter"},
      ]
    },
  ]

  protected activeTab = signal<TabId>('dashboard')

  protected activeContent = computed(() => {
    return this.tabs.find((tab) => tab.id === this.activeTab())!
  })

  protected setActiveTab(tabID: TabId){
    this.activeTab.set(tabID)
  }
}
